import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { ApiModule, Configuration } from '@app/core/api';
import { TranslationsModule } from '@app/core/translations';
import { SiteHeaderModule } from '@app/core/site-header';
import { UrlHelperModule } from '@app/core/url';
import { AuthModule } from '@app/core/auth';
import { InterceptorModule } from '@app/core/interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatCardModule,
    SiteHeaderModule,
    TranslationsModule,
    ApiModule.forRoot(() => new Configuration({ basePath: '/ogloszenia' })),
    UrlHelperModule,
    AuthModule,
    InterceptorModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
