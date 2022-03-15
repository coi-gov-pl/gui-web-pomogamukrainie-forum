import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, Validators } from '@angular/forms';
import { ErrorCode } from '../components/field-error/errors';

const OFFER_TITLE_REGEX = /^[^'"%<>`~]+$/;

@Directive({
  selector: '[appOfferDescriptionValidate]',
  providers: [{ provide: NG_VALIDATORS, useExisting: OfferDescriptionValidateDirective, multi: true }],
})
export class OfferDescriptionValidateDirective implements Validator {
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
