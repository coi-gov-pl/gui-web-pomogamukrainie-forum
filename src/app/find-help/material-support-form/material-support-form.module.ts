import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialSupportFormComponent } from './material-support-form.component';
import { MaterialSupportFormRoutingModule } from './material-support-form.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MoreInfoLinkModule } from '../../core/components/more-info-link/more-info-link.component';
import { TranslateModule } from '@ngx-translate/core';
import { CitiesSearchModule } from '../../cities-search/cities-search.module';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [MaterialSupportFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MoreInfoLinkModule,
    TranslateModule,
    CitiesSearchModule,
    MaterialSupportFormRoutingModule,
    MatCardModule,
  ],
  exports: [MaterialSupportFormComponent],
})
export class MaterialSupportFormModule {}
