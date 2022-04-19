import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { CategoryNavigationComponentModule, SortingHeaderModule } from '@app/shared/components';
import { LawSearchFormComponent } from './law-search-form/law-search-form.component';
import { LawSearchComponent } from './law-search.component';
import { MatCardModule } from '@angular/material/card';
import { SearchResultComponentModule } from '../search-result/search-result.module';
import { CitiesSearchModule, NoResultsModule, PaginatorModule } from '@app/shared/components';
import { TranslateModule } from '@ngx-translate/core';
import { LawSearchRoutingModule } from './law-search.routing.module';
import { MatSelectModule } from '@angular/material/select';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [LawSearchFormComponent, LawSearchComponent],
  exports: [LawSearchComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    SearchResultComponentModule,
    CitiesSearchModule,
    LawSearchRoutingModule,
    CategoryNavigationComponentModule,
    MatSelectModule,
    MatCardModule,
    TranslateModule,
    MatIconModule,
    NoResultsModule,
    PaginatorModule,
    SortingHeaderModule,
    SharedModule,
  ],
})
export class LawSearchModule {}
