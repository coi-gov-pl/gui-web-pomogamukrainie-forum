import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FindHelpComponent } from './find-help.component';
import { FindHelpRoutingModule } from './find-help-routing.module';
import { MatCardModule } from '@angular/material/card';
import { TranslateModule } from '@ngx-translate/core';
import { CategoryNavigationComponentModule } from '../welcome/category-navigation/category-navigation.component';
import { AccommodationSearchModule } from './accommodation-search/accommodation-search.module';
import { TransportSearchModule } from './transport-search/transport-search.module';
import { MaterialSupportSearchModule } from './material-support-search/material-support-search.module';

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
    MaterialSupportSearchModule,
  ],
})
export class FindHelpModule {}
