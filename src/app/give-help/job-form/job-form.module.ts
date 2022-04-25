import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobFormRoutingModule } from './job-form-routing.module';
import { JobFormComponent } from './job-form.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { CitiesSearchModule, FieldErrorModule } from '@app/shared/components';
import { TranslateModule } from '@ngx-translate/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { GiveHelpFormModule } from '../give-help-form/give-help-form.module';
import { SharedModule } from '@app/shared/shared.module';
@NgModule({
  declarations: [JobFormComponent],
  imports: [
    CommonModule,
    JobFormRoutingModule,
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
    SharedModule,
  ],
})
export class JobFormModule {}
