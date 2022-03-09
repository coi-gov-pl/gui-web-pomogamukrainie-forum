import { NgModule, Optional, SkipSelf } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Language, PomTranslateLoader } from './translate-loader.service';

@NgModule({
  imports: [
    TranslateModule.forRoot({
      defaultLanguage: Language.pl_PL,
      loader: {
        provide: TranslateLoader,
        useClass: PomTranslateLoader,
      },
    }),
  ],
  exports: [TranslateModule],
})
export class TranslationsModule {
  constructor(@Optional() @SkipSelf() parentModule: TranslationsModule) {
    if (parentModule) {
      throw new Error('TranslationsModule is already loaded. Import in your base AppModule only.');
    }
  }
}
