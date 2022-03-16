import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, Validators } from '@angular/forms';
import { ErrorCode } from '../components/field-error/errors';
const PHONE_NUMBER_REGEX = /^\d{9}$/;

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[simplePhone]',
  providers: [{ provide: NG_VALIDATORS, useExisting: SimplePhoneValidateDirective, multi: true }],
})
export class SimplePhoneValidateDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    if (Validators.required(control)) {
      return null;
    }
    const valid = PHONE_NUMBER_REGEX.test(control.value);
    const error: ValidationErrors = {};
    error[ErrorCode.phoneIllegalCharacters] = { value: control.value };
    return valid ? null : error;
  }
}
