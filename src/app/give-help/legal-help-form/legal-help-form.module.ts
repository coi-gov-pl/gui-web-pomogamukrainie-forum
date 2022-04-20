import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CitiesSearchModule, FieldErrorModule } from '@app/shared/components';
import { SharedModule } from '@app/shared/shared.module';
import { ValidatorsDirectivesModule } from '@app/shared/validators';
import { TranslateModule } from '@ngx-translate/core';
import { GiveHelpFormModule } from '../give-help-form/give-help-form.module';
import { LegalHelpFormComponent } from './legal-help-form.component';
import { LegalHelpFormRoutingModule } from './legal-help-form.routing.module';

@NgModule({
  declarations: [LegalHelpFormComponent],
  imports: [
    CitiesSearchModule,
    CommonModule,
    FieldErrorModule,
    FormsModule,
    GiveHelpFormModule,
    LegalHelpFormRoutingModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    SharedModule,
    TranslateModule,
    ValidatorsDirectivesModule,
  ],
})
export class LegalHelpFormModule {}
