import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialAidFormRoutingModule } from './material-aid-form-routing.module';
import { MaterialAidFormComponent } from './material-aid-form.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { OfferFormComponentModule } from '../offer-form/offer-form.module';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [MaterialAidFormComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    OfferFormComponentModule,
    MaterialAidFormRoutingModule,
    MatCardModule,
    TranslateModule,
  ],
})
export class MaterialAidFormModule {}
