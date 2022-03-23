import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailValidateDirective } from './email-validate.directive';
import { OfferDescriptionValidateDirective } from './offer-description-validate.directive';
import { OfferTitleValidateDirective } from './offer-title-validate.directive';
import { PhoneValidateDirective } from './phone-validate.directive';
import { MinMaxValidateDirective } from './min-max-validate.directive';

const directives = [
  EmailValidateDirective,
  OfferDescriptionValidateDirective,
  OfferTitleValidateDirective,
  PhoneValidateDirective,
  MinMaxValidateDirective,
];

@NgModule({
  declarations: [...directives],
  exports: [...directives],
  imports: [CommonModule],
})
export class ValidatorsDirectivesModule {}
