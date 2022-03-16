import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { ReplyOfferComponent } from './reply-offer.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FieldErrorModule } from '@app/shared/components';
import { EmailValidateDirective } from '@app/shared/validators/email-validate.directive';

@NgModule({
  declarations: [ReplyOfferComponent, EmailValidateDirective],
  imports: [
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    MatCardModule,
    TranslateModule,
    MatIconModule,
    FieldErrorModule,
  ],
  exports: [ReplyOfferComponent],
})
export class ReplyOfferModule {}
