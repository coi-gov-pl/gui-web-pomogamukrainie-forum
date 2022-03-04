import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiveHelpComponent } from './give-help.component';
import { GiveHelpRoutingModule } from './give-help-routing.module';
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
})
export class GiveHelpModule {}
