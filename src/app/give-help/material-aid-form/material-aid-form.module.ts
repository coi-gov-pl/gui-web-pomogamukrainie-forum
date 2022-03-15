import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialAidFormRoutingModule } from './material-aid-form-routing.module';
import { MaterialAidFormComponent } from './material-aid-form.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { OfferTitleValidateDirective } from '@app/shared/validators/offer-title-validate.directive';
import { FieldErrorModule } from '@app/shared/components';
import { OfferDescriptionValidateDirective } from '@app/shared/validators/offer-description-validate.directive'; // TODO: move imports to eg. shared

@NgModule({
  declarations: [MaterialAidFormComponent, OfferTitleValidateDirective, OfferDescriptionValidateDirective],
  imports: [
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    MaterialAidFormRoutingModule,
    MatCardModule,
    TranslateModule,
    MatIconModule,
    FieldErrorModule,
  ],
})
export class MaterialAidFormModule {}
