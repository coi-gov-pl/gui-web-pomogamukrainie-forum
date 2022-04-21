import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { FieldErrorModule } from '@app/shared/components';
import { ValidatorsDirectivesModule } from '@app/shared/validators';
import { PhoneInputComponent } from './phone-input.component';
@NgModule({
  declarations: [PhoneInputComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    TranslateModule,
    FieldErrorModule,
    ValidatorsDirectivesModule,
  ],
  exports: [PhoneInputComponent],
})
export class PhoneInputModule {}
