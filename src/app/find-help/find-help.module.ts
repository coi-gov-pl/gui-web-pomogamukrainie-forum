import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FindHelpComponent } from './find-help.component';
import { FindHelpRoutingModule } from './find-help-routing.module';
import { MatCardModule } from '@angular/material/card';
import { TranslateModule } from '@ngx-translate/core';
import { CategoryNavigationComponentModule } from '../welcome/category-navigation/category-navigation.component';

@NgModule({
  declarations: [FindHelpComponent],
  imports: [CommonModule, CategoryNavigationComponentModule, MatCardModule, TranslateModule, FindHelpRoutingModule],
})
export class FindHelpModule {}
