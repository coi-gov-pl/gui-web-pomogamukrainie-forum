import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { HealthSearchRoutingModule } from './health-search.routing.module';
import { PomCommonPipesModule } from '@app/shared/pipes';
import { TranslateModule } from '@ngx-translate/core';
import { HealthSearchComponent } from './health-search.component';
import { SearchResultComponentModule } from '../search-result/search-result.module';
import {
  CategoryNavigationComponentModule,
  CitiesSearchModule,
  MoreInfoLinkModule,
  NoResultsModule,
  PaginatorModule,
  SortingHeaderModule,
} from '@app/shared/components';
import { HealthSearchFormComponent } from './health-search-form/health-search-form.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [HealthSearchComponent, HealthSearchFormComponent],
  exports: [HealthSearchComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    HealthSearchRoutingModule,
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
export class HealthSearchModule {}
