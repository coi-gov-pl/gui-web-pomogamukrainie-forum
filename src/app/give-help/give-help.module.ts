import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CategoryNavigationComponentModule } from '@app/shared/components';
import { SharedModule } from '@app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { AccommodationFormComponentModule } from './accommodation-form/accommodation-form.module';
import { GiveHelpRoutingModule } from './give-help-routing.module';
import { GiveHelpComponent } from './give-help.component';

@NgModule({
  declarations: [GiveHelpComponent],
  imports: [
    CommonModule,
    GiveHelpRoutingModule,
    MatCardModule,
    AccommodationFormComponentModule,
    CategoryNavigationComponentModule,
    TranslateModule,
    SharedModule,
  ],
})
export class GiveHelpModule {}
