import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { LanguageInterceptor } from './language.interceptor';
import { HttpErrorInterceptor } from './http-error.interceptor';

@NgModule({
  imports: [CommonModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LanguageInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
  ],
})
export class InterceptorModule {
  constructor(@Optional() @SkipSelf() parentModule: InterceptorModule) {
    if (parentModule) {
      throw new Error('InterceptorModule is already loaded. Import in your base AppModule only.');
    }
  }
}
