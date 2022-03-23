import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class LanguageInterceptor implements HttpInterceptor {
  constructor(private translateService: TranslateService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // second header for API translations, without auth API
    if (!request.url.includes('auth')) {
      request = request.clone({
        setHeaders: {
          'X-Language': this.translateService.currentLang,
        },
      });
    }
    return next.handle(request);
  }
}
