import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Language, PomTranslateLoader } from './core/translate-loader.service';
import { AccommodationFormComponentModule } from './give-help/accommodation-form/accommodation-form.module';
import { HttpClientModule } from '@angular/common/http';
import { ApiModule, Configuration } from '../api';
import { AuthModule } from './core/auth';
import { InterceptorModule } from './core/interceptor/interceptor.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatCardModule,
    AccommodationFormComponentModule,
    TranslateModule.forRoot({
      defaultLanguage: Language.pl_PL,
      loader: {
        provide: TranslateLoader,
        useClass: PomTranslateLoader,
      },
    }),
    ApiModule.forRoot(() => new Configuration({ basePath: '' })),
    AuthModule,
    InterceptorModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
