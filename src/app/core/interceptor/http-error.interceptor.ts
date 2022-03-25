import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor, HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SnackbarService } from '@app/shared/services';
import { TranslateService } from '@ngx-translate/core';
import { ALERT_TYPES } from '@app/shared/models';
import { AllOffersMapper, offerMapper } from './field-mapper';

/**
 *  type: 'FIELD' -> save offer,
 *  type: 'USER' -> not found user in offer
 *  type: 'OBJECT' -> (with field 'offer') -> offer not found
 */
interface ApiErrors {
  field: 'string' | 'recaptcha-response';
  message: string;
  type: 'FIELD' | 'USER' | 'OBJECT';
}

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private snackbarService: SnackbarService, private translateService: TranslateService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((req) => {
        if (req instanceof HttpErrorResponse) {
          this.convertErrorToNotifcation(req);
        }
        return throwError(() => req);
      })
    );
  }

  private convertErrorToNotifcation(req: HttpErrorResponse): void {
    switch (req.status) {
      case 400:
        try {
          const firstError: ApiErrors = (req.error.errors as ApiErrors[])[0];
          // save offer error
          if (firstError.type === 'FIELD' && firstError.field !== 'recaptcha-response') {
            this.listNotifications(req);
            // captcha error
          } else if (firstError.field === 'recaptcha-response') {
            this.snackbarService.openSnack(firstError.message, ALERT_TYPES.ERROR);
          }
        } catch {
          this.snackbarService.openSnack(
            this.translateService.instant('API_HTTP_ERROR_SERVER_BAD_REQUEST'),
            ALERT_TYPES.ERROR
          );
        }
        break;
      case 401:
      case 403:
        this.snackbarService.openSnack(
          this.translateService.instant('API_HTTP_ERROR_SESSION_OR_PERMISSION'),
          ALERT_TYPES.ERROR
        );
        break;
      case 404:
        try {
          const firstError: ApiErrors = (req.error.errors as ApiErrors[])[0];
          // user is not associated with the offer
          if (firstError.type === 'USER') {
            this.snackbarService.openSnack(firstError.message, ALERT_TYPES.ERROR);
          }
        } catch {}
        break;
      case 500:
      case 0:
      default:
        this.snackbarService.openSnack(
          this.translateService.instant('API_HTTP_ERROR_SERVER_FAILED_CONNECTION'),
          ALERT_TYPES.ERROR
        );
        break;
    }
  }

  private listNotifications(req: HttpErrorResponse): void {
    const listErrors: ApiErrors[] = (req.error.errors as ApiErrors[]) || [];
    listErrors.map((el) => {
      // nested object; for example -> location.city
      const fieldName: string = el.field.includes('.') ? el.field.split('.')[0] : el.field;
      if (offerMapper[fieldName as keyof AllOffersMapper]) {
        // translate the key
        const translatedField: string = this.translateService.instant(offerMapper[fieldName as keyof AllOffersMapper]);
        // show info
        this.snackbarService.openSnack(`${translatedField} ${(el.message || '').toLowerCase()}`, ALERT_TYPES.ERROR);
      }
    });
  }
}
