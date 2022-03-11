import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { AccommodationFormComponent } from './accommodation-form.component';
import { CommonModule } from '@angular/common';
import { AccommodationSearchRoutingModule } from './accomodation-form.routing.module';
import { MatCardModule } from '@angular/material/card';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [AccommodationFormComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    AccommodationSearchRoutingModule,
    MatCardModule,
    TranslateModule,
    MatIconModule,
  ],
  exports: [AccommodationFormComponent],
})
export class AccommodationFormComponentModule {}
