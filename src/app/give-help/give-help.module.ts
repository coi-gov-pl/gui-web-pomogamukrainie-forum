import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiveHelpComponent } from './give-help.component';
import { GiveHelpRoutingModule } from './give-help-routing.module';
<<<<<<< HEAD
import { TranslateModule } from '@ngx-translate/core';
import {AccommodationFormComponentModule} from "./accommodation-form/accommodation-form.module";

@NgModule({
  declarations: [
    GiveHelpComponent
  ],
    imports: [
        CommonModule,
        GiveHelpRoutingModule,
        MatCardModule,
        AccommodationFormComponentModule,
      TranslateModule,
    ]
=======
import { MatCardModule } from '@angular/material/card';
import { AccommodationFormComponentModule } from './accommodation-form/accommodation-form.module';

@NgModule({
  declarations: [GiveHelpComponent],
  imports: [CommonModule, GiveHelpRoutingModule, MatCardModule, AccommodationFormComponentModule],
>>>>>>> 8b6d656 ([POM-13] initial find help with categories)
})
export class GiveHelpModule {}
