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
import { HttpClientModule } from '@angular/common/http';
import { SearchResultComponentModule } from '../search-result/search-result.component';
import { TranslateModule } from '@ngx-translate/core';

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
    SearchResultComponentModule,
    TranslateModule,
  ],
})
export class AccommodationSearchModule {}
