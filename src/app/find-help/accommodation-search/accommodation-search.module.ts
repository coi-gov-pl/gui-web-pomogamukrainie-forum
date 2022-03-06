import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MoreInfoLinkModule } from '../../core/components/more-info-link/more-info-link.component';
import { AccommodationSearchFormComponent } from './accommodation-search-form/accommodation-search-form.component';
import { AccommodationSearchComponent } from './accommodation-search.component';
import { MatCardModule } from '@angular/material/card';
import { PomCommonPipesModule } from '../../shared/pipes/pom-common-pipes.module';
import { HttpClientModule } from '@angular/common/http';
import { SearchResultComponentModule } from '../search-result/search-result.module';
import { CitiesSearchModule } from 'src/app/cities-search/cities-search.module';
import { TranslateModule } from '@ngx-translate/core';
import { AccomodationSearchRoutingModule } from './accomodation-search.routing.module';

@NgModule({
  declarations: [AccommodationSearchFormComponent, AccommodationSearchComponent],
  exports: [AccommodationSearchComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
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
