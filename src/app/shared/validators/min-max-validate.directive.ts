import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, Validators } from '@angular/forms';
import { ErrorCode } from '../components/field-error/errors';

@Directive({
  selector: '[appMinValidate],[appMaxValidate]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MinMaxValidateDirective, multi: true }],
})
export class MinMaxValidateDirective implements Validator {
  @Input('appMinValidate') min = -Infinity;
  @Input('appMaxValidate') max = Infinity;

  validate(control: AbstractControl): ValidationErrors | null {
    if (Validators.required(control)) {
      return null;
    }

    const error: ValidationErrors = {};
    const value = Number(control.value);

    console.log('minmax', control.value);

    if (isNaN(value)) {
      error[ErrorCode.notNumber] = { value: control.value };
      return error;
    }

    if (control.value !== value.toString()) {
      error[ErrorCode.notNumber] = { value: control.value };
      return error;
    }

    if (this.min !== -Infinity && value < this.min) {
      error[ErrorCode.min] = { value: control.value };
      return error;
    }

    if (this.max !== Infinity && value > this.max) {
      error[ErrorCode.max] = { value: control.value };
      return error;
    }

    return null;
  }
}
