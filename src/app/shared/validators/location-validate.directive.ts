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
// validate(control: AbstractControl): ValidationErrors | null {
//   console.log('val:', control.value);
//   if (Validators.required(control)) {
//     return null;
//   }
// if (
//   !LOCATION_REGEX.test(control.value)
//   //  || control.value.length < 3 ||
//   // control.value.length > 15
// ) {
//   console.log('error');
//   return { error: 'BŁąd' };
// }
// const valid = LOCATION_REGEX.test(control.value);
// const error: ValidationErrors = {};
// error[ErrorCode.emailIllegalCharacters] = { value: control.value };
// return valid ? null : error;
//   return null as any;
// }

// validate(control: AbstractControl): { [key: string]: any } {
//   if (Validators.required(control)) {
//     return null as any;
//   }
//   if (control.value) {
//     console.log('control.value', control.value);
//     const regexPattern: RegExp = new RegExp('/[a-z]/gi');
//     if (
//       regexPattern.test(control.value)
//       //  || control.value.length < 3 ||
//       // control.value.length > 15
//     ) {
//       console.log('error');
//       return { templateNameInvalid: 'form.errors.templateName' };
//     }
//   }
//   return null as any;
//   }
// }
