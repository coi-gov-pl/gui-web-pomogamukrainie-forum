import { NgModule } from '@angular/core';
import { WelcomeComponent } from './welcome.component';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { CategoryNavigationComponentModule, TypeOfHelpComponentModule } from '@app/shared/components';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [WelcomeComponent, DashboardComponent],
  imports: [
    CommonModule,
    TypeOfHelpComponentModule,
    CategoryNavigationComponentModule,
    WelcomeRoutingModule,
    MatIconModule,
    TranslateModule,
    MatDialogModule,
  ],
})
export class WelcomeModule {}
