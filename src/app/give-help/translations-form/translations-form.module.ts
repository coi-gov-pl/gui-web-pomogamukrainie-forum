import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationsFormRoutingModule } from './translations-form-routing.module';
import { TranslationsFormComponent } from './translations-form.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { CitiesSearchModule, FieldErrorModule } from '@app/shared/components';
import { ValidatorsDirectivesModule } from '@app/shared/validators';
import { GiveHelpFormModule } from '../give-help-form/give-help-form.module';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from '@app/shared/shared.module';
@NgModule({
  declarations: [TranslationsFormComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    TranslationsFormRoutingModule,
    MatCardModule,
    TranslateModule,
    MatIconModule,
    FieldErrorModule,
    ValidatorsDirectivesModule,
    CitiesSearchModule,
    GiveHelpFormModule,
    MatDialogModule,
    SharedModule,
  ],
})
export class TranslationsFormModule {}
