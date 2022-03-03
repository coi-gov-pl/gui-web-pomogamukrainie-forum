import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NoopAnimationsModule, MatCardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
