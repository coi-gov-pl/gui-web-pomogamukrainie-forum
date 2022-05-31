import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { OtherSearchRoutingModule } from './other-search.routing.module';
import { PomCommonPipesModule } from '@app/shared/pipes';
import { TranslateModule } from '@ngx-translate/core';
import { OtherSearchComponent } from './other-search.component';
import { SearchResultComponentModule } from '../search-result/search-result.module';
import {
  CategoryNavigationComponentModule,
  CitiesSearchModule,
  MoreInfoLinkModule,
  NoResultsModule,
  PaginatorModule,
  SortingHeaderModule,
} from '@app/shared/components';
import { OtherSearchFormComponent } from './other-search-form/other-search-form.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [OtherSearchComponent, OtherSearchFormComponent],
  exports: [OtherSearchComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatNativeDateModule,
    OtherSearchRoutingModule,
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
export class OtherSearchModule {}
