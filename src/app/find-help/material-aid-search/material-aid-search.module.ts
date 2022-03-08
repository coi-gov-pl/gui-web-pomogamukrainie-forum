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
import { MaterialAidSearchRoutingModule } from './material-aid-search.routing.module';
import { PomCommonPipesModule } from '../../shared/pipes/pom-common-pipes.module';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialAidSearchComponent } from './material-aid-search.component';
import { SearchResultComponentModule } from '../search-result/search-result.module';
import { CitiesSearchModule } from '../../cities-search/cities-search.module';
import { MoreInfoLinkModule } from '../../core/components/more-info-link/more-info-link.component';
import { MaterialAidSearchFormComponent } from './material-aid-search-form/material-aid-search-form.component';

@NgModule({
  declarations: [MaterialAidSearchComponent, MaterialAidSearchFormComponent],
  exports: [MaterialAidSearchComponent],
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
    MaterialAidSearchRoutingModule,
    PomCommonPipesModule,
    TranslateModule,
    CitiesSearchModule,
    SearchResultComponentModule,
    MoreInfoLinkModule,
  ],
})
export class MaterialAidSearchModule {}
