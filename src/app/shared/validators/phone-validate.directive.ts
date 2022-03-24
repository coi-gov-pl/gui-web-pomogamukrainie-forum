import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, Validators } from '@angular/forms';
import { ErrorCode } from '../components/field-error/errors';
import { PhoneNumberUtil } from 'google-libphonenumber';
const phoneNumberUtil = PhoneNumberUtil.getInstance();

@Directive({
  selector: '[appPhoneValidate]',
  providers: [{ provide: NG_VALIDATORS, useExisting: PhoneValidateValidateDirective, multi: true }],
})
export class PhoneValidateValidateDirective implements Validator {
  @Input('appPhoneValidate') countryCode: string | undefined;
  validate(control: AbstractControl): ValidationErrors | null {
    if (Validators.required(control)) {
      return null;
    }
    let valid = false;
    try {
      let phoneNumber = phoneNumberUtil.parseAndKeepRawInput(control.value, this.countryCode);
      valid = phoneNumberUtil.isValidNumber(phoneNumber);
    } catch (e) {}
    const error: ValidationErrors = {};
    error[ErrorCode.phoneRequiredCharacters] = { value: control.value };
    return valid ? null : error;
  }
}
