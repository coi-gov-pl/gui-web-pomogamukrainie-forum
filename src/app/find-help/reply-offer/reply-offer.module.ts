import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { ReplyOfferComponent } from './reply-offer.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FieldErrorModule } from '@app/shared/components';
import { ValidatorsDirectivesModule } from '@app/shared/validators';
import { PolicyLinkModule } from '@app/shared/components/policy-link/policy-link.module';
import {
  RecaptchaModule,
  RecaptchaV3Module,
  RECAPTCHA_BASE_URL,
  RECAPTCHA_LANGUAGE,
  RECAPTCHA_V3_SITE_KEY,
} from 'ng-recaptcha';

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
    PolicyLinkModule,
    RecaptchaV3Module,
    RecaptchaModule,
  ],
  providers: [
    {
      provide: RECAPTCHA_V3_SITE_KEY,
      useValue: 'explicit',
    },
    {
      provide: RECAPTCHA_BASE_URL,
      useValue: 'https://www.google.com/recaptcha/enterprise.js',
    },
    {
      provide: RECAPTCHA_LANGUAGE,
      useFactory: (translateService: TranslateService) => {
        return translateService.currentLang.split('_')[0];
      },
      deps: [TranslateService],
    },
  ],
  exports: [ReplyOfferComponent],
})
export class ReplyOfferModule {}
