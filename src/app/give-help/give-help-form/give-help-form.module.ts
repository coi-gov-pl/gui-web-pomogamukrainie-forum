import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublishAdButtonComponent } from './publish-ad-button/publish-ad-button.component';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { OfferTitleInputComponent } from './offer-title-input/offer-title-input.component';
import { MatInputModule } from '@angular/material/input';
import { FieldErrorModule } from '@app/shared/components';
import { ValidatorsDirectivesModule } from '@app/shared/validators';
import { OfferDescriptionInputComponent } from './offer-description-input/offer-description-input.component';
import { OfferPhoneNumberInputComponent } from './offer-phone-number-input/offer-phone-number-input.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    PublishAdButtonComponent,
    OfferTitleInputComponent,
    OfferDescriptionInputComponent,
    OfferPhoneNumberInputComponent,
  ],
  exports: [
    PublishAdButtonComponent,
    OfferTitleInputComponent,
    OfferDescriptionInputComponent,
    OfferPhoneNumberInputComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    TranslateModule,
    MatInputModule,
    FieldErrorModule,
    ValidatorsDirectivesModule,
    MatSelectModule,
  ],
})
export class GiveHelpFormModule {}
