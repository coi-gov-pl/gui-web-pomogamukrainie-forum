import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiveHelpComponent } from './give-help.component';
import { GiveHelpRoutingModule } from './give-help-routing.module';

import { MatCardModule } from '@angular/material/card';
import { AccommodationFormComponentModule } from './accommodation-form/accommodation-form.module';
import { CategoryNavigationComponentModule } from '../welcome/category-navigation/category-navigation.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [GiveHelpComponent],
  imports: [
    CommonModule,
    GiveHelpRoutingModule,
    MatCardModule,
    AccommodationFormComponentModule,
    CategoryNavigationComponentModule,
    TranslateModule,
  ],
})
export class GiveHelpModule {}
