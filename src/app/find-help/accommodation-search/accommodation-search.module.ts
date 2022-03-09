import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MoreInfoLinkModule } from '@app/shared/components';
import { AccommodationSearchFormComponent } from './accommodation-search-form/accommodation-search-form.component';
import { AccommodationSearchComponent } from './accommodation-search.component';
import { MatCardModule } from '@angular/material/card';
import { PomCommonPipesModule } from '@app/shared/pipes';
import { SearchResultComponentModule } from '../search-result/search-result.module';
import { CitiesSearchModule } from '@app/shared/components';
import { TranslateModule } from '@ngx-translate/core';
import { AccomodationSearchRoutingModule } from './accomodation-search.routing.module';

@NgModule({
  declarations: [AccommodationSearchFormComponent, AccommodationSearchComponent],
  exports: [AccommodationSearchComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MoreInfoLinkModule,
    MatCardModule,
    PomCommonPipesModule,
    SearchResultComponentModule,
    CitiesSearchModule,
    TranslateModule,
    AccomodationSearchRoutingModule,
  ],
})
export class AccommodationSearchModule {}
