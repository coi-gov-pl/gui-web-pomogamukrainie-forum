import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { AccommodationFormComponent } from './accommodation-form.component';
import { CommonModule } from '@angular/common';
import { OfferFormComponentModule } from '../offer-form/offer-form.module';

@NgModule({
  declarations: [AccommodationFormComponent],
  imports: [CommonModule, MatFormFieldModule, FormsModule, MatSelectModule, MatInputModule, OfferFormComponentModule],
  exports: [AccommodationFormComponent],
})
export class AccommodationFormComponentModule {}
