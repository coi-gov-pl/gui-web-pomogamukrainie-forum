import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, Validators } from '@angular/forms';
import { ErrorCode } from '../components/field-error/errors';

const EMAIL_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

@Directive({
  selector: '[appEmailValidate]',
  providers: [{ provide: NG_VALIDATORS, useExisting: EmailValidateDirective, multi: true }],
})
export class EmailValidateDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    if (Validators.required(control)) {
      return null;
    }
    const valid = EMAIL_REGEX.test(control.value);
    const error: ValidationErrors = {};
    error[ErrorCode.emailIllegalCharacters] = { value: control.value };
    return valid ? null : error;
  }
}
