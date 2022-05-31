import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApplicationinsightsAngularpluginErrorService } from '@microsoft/applicationinsights-angularplugin-js';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SnackbarAlertModule } from '@app/shared/components';
import { CoreModule } from '@app/core/core.module';
import { LoadingComponent } from '@app/shared/components';
import { LoadingInterceptor } from '@app/shared/services';
import { LoadingService } from '@app/shared/services';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MobileViewportDetectService } from './shared/services/mobile-viewport-detect.service';
import { ConfirmSessionExpiredDialogModule } from './shared/components/confirm-session-expired/confirm-session-expired.module';

@NgModule({
  declarations: [AppComponent, LoadingComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    SnackbarAlertModule,
    CoreModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    ConfirmSessionExpiredDialogModule,
  ],
  entryComponents: [LoadingComponent],
  bootstrap: [AppComponent],
  providers: [
    LoadingService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
    {
      provide: ErrorHandler,
      useClass: ApplicationinsightsAngularpluginErrorService,
    },
    MobileViewportDetectService,
  ],
})
export class AppModule {}
