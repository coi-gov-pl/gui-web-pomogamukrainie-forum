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
import { ValidatorsDirectivesModule } from '@app/shared/validators';
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module, RECAPTCHA_BASE_URL } from 'ng-recaptcha';
import { environment } from 'src/environments/environment';
import { PolicyLinkModule } from '@app/shared/components/policy-link/policy-link.module';

@NgModule({
  declarations: [ReplyOfferComponent],
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
    ValidatorsDirectivesModule,
    RecaptchaV3Module,
    PolicyLinkModule,
  ],
  exports: [ReplyOfferComponent],
  providers: [
    {
      provide: RECAPTCHA_V3_SITE_KEY,
      useValue: environment.recaptcha.siteKey,
    },
    {
      provide: RECAPTCHA_BASE_URL,
      useValue: 'https://www.google.com/recaptcha/enterprise.js',
    },
  ],
})
export class ReplyOfferModule {}
