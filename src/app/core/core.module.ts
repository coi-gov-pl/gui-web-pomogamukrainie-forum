import { NgModule, Optional, SkipSelf } from '@angular/core';
import { ApiHelperModule } from './api-helper/api-helper.module';
import { AuthModule } from './auth';
import { InterceptorModule } from './interceptor';
import { SiteFooterModule } from './site-footer';
import { SiteHeaderModule } from './site-header';
import { TranslationsModule } from './translations';
import { UrlHelperModule } from './url';

@NgModule({
  imports: [
    AuthModule,
    ApiHelperModule,
    InterceptorModule,
    SiteFooterModule,
    SiteHeaderModule,
    TranslationsModule,
    UrlHelperModule,
  ],
  exports: [SiteFooterModule, SiteHeaderModule],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import in your base AppModule only.');
    }
  }
}
