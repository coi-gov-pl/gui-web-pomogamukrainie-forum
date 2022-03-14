import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiveHelpComponent } from './give-help.component';
import { GiveHelpRoutingModule } from './give-help-routing.module';
import { MatCardModule } from '@angular/material/card';
import { AccommodationFormComponentModule } from './accommodation-form/accommodation-form.module';
import { CategoryNavigationComponentModule } from '@app/shared/components';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@app/shared/shared.module';

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
