import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, Validators } from '@angular/forms';
import { ErrorCode } from '../components/field-error/errors';

const OFFER_TITLE_REGEX = /^[^"%<>()@`~]+$/;

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
    const error: ValidationErrors = {};
    error[ErrorCode.titleIllegalCharacters] = { value: control.value };
    return valid ? null : error;
  }
}
