import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FindHelpComponent } from './find-help.component';
import { FindHelpRoutingModule } from './find-help-routing.module';
import { MatCardModule } from '@angular/material/card';
import { TranslateModule } from '@ngx-translate/core';
import { CategoryNavigationComponentModule } from '@app/shared/components';
import { AccommodationSearchModule } from './accommodation-search/accommodation-search.module';
import { TransportSearchModule } from './transport-search/transport-search.module';
import { MaterialAidSearchModule } from './material-aid-search/material-aid-search.module';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [FindHelpComponent],
  imports: [
    CommonModule,
    CategoryNavigationComponentModule,
    MatCardModule,
    TranslateModule,
    FindHelpRoutingModule,
    AccommodationSearchModule,
    TransportSearchModule,
    MaterialAidSearchModule,
    SharedModule,
  ],
})
export class FindHelpModule {}
