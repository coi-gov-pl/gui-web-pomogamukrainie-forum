import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { TransportSearchRoutingModule } from './transport-search.routing.module';
import { PomCommonPipesModule } from '../../shared/pipes/pom-common-pipes.module';
import { TranslateModule } from '@ngx-translate/core';
import { TransportSearchComponent } from './transport-search.component';
import { SearchResultComponentModule } from '../search-result/search-result.module';
import { CitiesSearchModule } from '../../cities-search/cities-search.module';
import { MoreInfoLinkModule } from '../../core/components/more-info-link/more-info-link.component';
import { TransportSearchFormComponent } from './transport-search-form/transport-search-form.component';

@NgModule({
  declarations: [TransportSearchComponent, TransportSearchFormComponent],
  exports: [TransportSearchComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule,
    TransportSearchRoutingModule,
    PomCommonPipesModule,
    TranslateModule,
    CitiesSearchModule,
    SearchResultComponentModule,
    MoreInfoLinkModule,
  ],
})
export class TransportSearchModule {}
