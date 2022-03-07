import { NgModule } from '@angular/core';
import { WelcomeComponent } from './welcome.component';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { TypeOfHelpComponentModule } from '../shared/components/type-of-help/type-of-help.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { CategoryNavigationComponentModule } from './category-navigation/category-navigation.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [WelcomeComponent, DashboardComponent],
  imports: [
    CommonModule,
    TypeOfHelpComponentModule,
    CategoryNavigationComponentModule,
    WelcomeRoutingModule,
    MatIconModule,
    TranslateModule,
  ],
})
export class WelcomeModule {}
