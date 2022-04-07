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
import { CitiesSearchModule, FieldErrorModule } from '@app/shared/components';
import { ValidatorsDirectivesModule } from '@app/shared/validators';
import { GiveHelpFormModule } from '../give-help-form/give-help-form.module';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [MaterialAidFormComponent],
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
    ValidatorsDirectivesModule,
    CitiesSearchModule,
    GiveHelpFormModule,
    MatDialogModule,
  ],
})
export class MaterialAidFormModule {}
