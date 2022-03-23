import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SnackbarAlertModule } from '@app/shared/components';
import { CoreModule } from '@app/core/core.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NoopAnimationsModule, SnackbarAlertModule, CoreModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
