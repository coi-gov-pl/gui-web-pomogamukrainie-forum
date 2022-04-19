import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { HealthCareRoutingModule } from './health-care-form.routing.module';
import { MatCardModule } from '@angular/material/card';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { CitiesSearchModule, FieldErrorModule } from '@app/shared/components';
import { ValidatorsDirectivesModule } from '@app/shared/validators';
import { GiveHelpFormModule } from '../give-help-form/give-help-form.module';
import { SharedModule } from '@app/shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { HealthCareFormComponent } from './health-care-form.component';
@NgModule({
  declarations: [HealthCareFormComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    HealthCareRoutingModule,
    MatCardModule,
    TranslateModule,
    MatIconModule,
    FieldErrorModule,
    ValidatorsDirectivesModule,
    CitiesSearchModule,
    GiveHelpFormModule,
    SharedModule,
    MatDialogModule,
  ],
  exports: [HealthCareFormComponent],
})
export class HealthCareFormModule {}
