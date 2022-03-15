import { forwardRef, Inject, Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthSessionStorageKeys } from '../auth/model';
import { STORAGE_INJECTION_TOKEN } from '../auth/auth.module';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(@Inject(forwardRef(() => STORAGE_INJECTION_TOKEN)) private storageToken: string) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken: string | null = sessionStorage.getItem(AuthSessionStorageKeys.ACCESS_TOKEN + this.storageToken);
    if (authToken) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${authToken}`,
        },
      });
    }
    return next.handle(request);
  }
}
