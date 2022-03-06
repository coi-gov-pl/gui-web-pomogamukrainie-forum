import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { PomTranslateLoader, Language } from './core/translate-loader.service';
import { CitiesSearchModule } from './cities-search/cities-search.module';
import { AccommodationFormComponentModule } from './give-help/accommodation-form/accommodation-form.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CitiesSearchModule,
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatCardModule,
    AccommodationFormComponentModule,
    CitiesSearchModule,
    TranslateModule.forRoot({
      defaultLanguage: Language.pl_PL,
      loader: {
        provide: TranslateLoader,
        useClass: PomTranslateLoader,
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
