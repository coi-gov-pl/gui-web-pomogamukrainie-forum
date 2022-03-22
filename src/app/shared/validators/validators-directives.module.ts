import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailValidateDirective } from './email-validate.directive';
import { OfferDescriptionValidateDirective } from './offer-description-validate.directive';
import { OfferTitleValidateDirective } from './offer-title-validate.directive';
import { PhoneValidateValidateDirective } from './simple-phone-validate.directive';
import { LocationValidateDirective } from './location-validate.directive';

const directives = [
  EmailValidateDirective,
  OfferDescriptionValidateDirective,
  OfferTitleValidateDirective,
  PhoneValidateValidateDirective,
  LocationValidateDirective,
];

@NgModule({
  declarations: [...directives],
  exports: [...directives],
  imports: [CommonModule],
})
export class ValidatorsDirectivesModule {}
