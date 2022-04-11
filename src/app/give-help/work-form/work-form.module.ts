import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkFormRoutingModule } from './work-form-routing.module';
import { WorkFormComponent } from './work-form.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { CitiesSearchModule, FieldErrorModule } from '@app/shared/components';
import { TranslateModule } from '@ngx-translate/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { GiveHelpFormModule } from '../give-help-form/give-help-form.module';

@NgModule({
  declarations: [WorkFormComponent],
  imports: [
    CommonModule,
    WorkFormRoutingModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    FieldErrorModule,
    TranslateModule,
    GiveHelpFormModule,
    CitiesSearchModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
})
export class WorkFormModule {}
