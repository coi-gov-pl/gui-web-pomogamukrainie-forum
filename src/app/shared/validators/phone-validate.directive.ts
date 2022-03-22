import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, Validators } from '@angular/forms';
import { ErrorCode } from '../components/field-error/errors';
const PHONE_NUMBER_REGEX = /^\d{7,15}$/;

@Directive({
  selector: '[appPhoneValidate]',
  providers: [{ provide: NG_VALIDATORS, useExisting: PhoneValidateValidateDirective, multi: true }],
})
export class PhoneValidateValidateDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    if (Validators.required(control)) {
      return null;
    }
    const valid = PHONE_NUMBER_REGEX.test(control.value);
    const error: ValidationErrors = {};
    error[ErrorCode.phoneRequiredCharacters] = { value: control.value };
    return valid ? null : error;
  }
}
