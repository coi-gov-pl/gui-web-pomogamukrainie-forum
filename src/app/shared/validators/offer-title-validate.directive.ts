import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, Validators } from '@angular/forms';

const OFFER_TITLE_REGEX = /[a-zA-Z]+/;

@Directive({
  selector: '[appOfferTitleValidate]',
  providers: [{ provide: NG_VALIDATORS, useExisting: OfferTitleValidateDirective, multi: true }],
})
export class OfferTitleValidateDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    if (Validators.required(control)) {
      return null;
    }
    const valid = OFFER_TITLE_REGEX.test(control.value);
    return valid ? null : { offerTitleInvalid: { value: control.value } };
  }
}
