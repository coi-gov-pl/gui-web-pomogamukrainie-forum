import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobSearchRoutingModule } from './job-search-routing.module';
import { JobSearchComponent } from './job-search.component';
import { JobSearchFormComponent } from './job-search-form/job-search-form.component';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MaterialAidSearchRoutingModule } from '../material-aid-search/material-aid-search.routing.module';
import { PomCommonPipesModule } from '@app/shared/pipes';
import { TranslateModule } from '@ngx-translate/core';
import {
  CategoryNavigationComponentModule,
  CitiesSearchModule,
  MoreInfoLinkModule,
  NoResultsModule,
  PaginatorModule,
  SortingHeaderModule,
} from '@app/shared/components';
import { SearchResultComponentModule } from '../search-result/search-result.module';
import { SharedModule } from '@app/shared/shared.module';
import { AccommodationSearchComponent } from '../accommodation-search/accommodation-search.component';

@NgModule({
  declarations: [JobSearchComponent, JobSearchFormComponent],
  exports: [JobSearchComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatNativeDateModule,
    JobSearchRoutingModule,
    PomCommonPipesModule,
    TranslateModule,
    CitiesSearchModule,
    SearchResultComponentModule,
    MoreInfoLinkModule,
    CategoryNavigationComponentModule,
    NoResultsModule,
    PaginatorModule,
    SortingHeaderModule,
    SharedModule,
  ],
})
export class JobSearchModule {}
