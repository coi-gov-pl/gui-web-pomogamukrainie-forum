import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { TransportFormComponent } from './transport-form.component';
import { TransportFormRoutingModule } from './transport-form.routing.modue';
import { MatNativeDateModule } from '@angular/material/core';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { DatepickerModule } from '@app/shared/components/datepicker/datepicker.module';

@NgModule({
  declarations: [TransportFormComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    TransportFormRoutingModule,
    MatCardModule,
    MatNativeDateModule,
    TranslateModule,
    MatIconModule,
    DatepickerModule,
  ],
  exports: [TransportFormComponent],
})
export class TransportFormComponentModule {}
