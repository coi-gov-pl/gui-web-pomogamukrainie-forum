import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MaterialSupportSearchRoutingModule } from './material-support-search.routing.module';
import { PomCommonPipesModule } from '../../shared/pipes/pom-common-pipes.module';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialSupportSearchComponent } from './material-support-search.component';
import { SearchResultComponentModule } from '../search-result/search-result.module';
import { CitiesSearchModule } from '../../cities-search/cities-search.module';
import { MoreInfoLinkModule } from '../../core/components/more-info-link/more-info-link.component';
import { MaterialSupportSearchFormComponent } from './material-support-search-form/material-support-search-form.component';

@NgModule({
  declarations: [MaterialSupportSearchComponent, MaterialSupportSearchFormComponent],
  exports: [MaterialSupportSearchComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatNativeDateModule,
    MaterialSupportSearchRoutingModule,
    PomCommonPipesModule,
    TranslateModule,
    CitiesSearchModule,
    SearchResultComponentModule,
    MoreInfoLinkModule,
  ],
})
export class MaterialSupportSearchModule {}
