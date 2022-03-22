import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, Validators } from '@angular/forms';
import { ErrorCode } from '../components/field-error/errors';

const LOCATION_REGEX = /[a-z]/gi;

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[locationValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: LocationValidateDirective, multi: true }],
})
export class LocationValidateDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    if (Validators.required(control)) {
      return null;
    }
    const valid = LOCATION_REGEX.test(control.value);
    const error: ValidationErrors = {};
    error[ErrorCode.locationIllegalCharacters] = { value: control.value };
    return valid ? null : error;
  }
}
