import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FindHelpComponent } from './find-help.component';
import { MatCardModule } from '@angular/material/card';
import { AccommodationSearchModule } from './accommodation-search/accommodation-search.module';
import { TransportSearchModule } from './transport-search/transport-search.module';
import { MaterialAidSearchModule } from './material-aid-search/material-aid-search.module';
import { FindHelpRoutingModule } from './find-help-routing.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [FindHelpComponent],
  imports: [
    CommonModule,
    MatCardModule,
    TranslateModule,
    FindHelpRoutingModule,
    AccommodationSearchModule,
    TransportSearchModule,
    MaterialAidSearchModule,
    TranslateModule,
  ],
})
export class FindHelpModule {}
