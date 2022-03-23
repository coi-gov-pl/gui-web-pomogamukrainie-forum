import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CategoryNavigationComponentModule, MoreInfoLinkModule, SortingHeaderModule } from '@app/shared/components';
import { AccommodationSearchFormComponent } from './accommodation-search-form/accommodation-search-form.component';
import { AccommodationSearchComponent } from './accommodation-search.component';
import { MatCardModule } from '@angular/material/card';
import { PomCommonPipesModule } from '@app/shared/pipes';
import { SearchResultComponentModule } from '../search-result/search-result.module';
import { CitiesSearchModule, NoResultsModule, PaginatorModule } from '@app/shared/components';
import { TranslateModule } from '@ngx-translate/core';
import { AccomodationSearchRoutingModule } from './accomodation-search.routing.module';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReplyOfferModule } from '../reply-offer/reply-offer.module';
import { ValidatorsDirectivesModule } from '@app/shared/validators';

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
    CategoryNavigationComponentModule,
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    MatCardModule,
    TranslateModule,
    MatIconModule,
    ReplyOfferModule,
    NoResultsModule,
    PaginatorModule,
    ValidatorsDirectivesModule,
    SortingHeaderModule,
  ],
})
export class AccommodationSearchModule {}
