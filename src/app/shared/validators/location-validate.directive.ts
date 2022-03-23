import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, Validators } from '@angular/forms';

@Directive({
  selector: '[appLocationValidate]',
  providers: [{ provide: NG_VALIDATORS, useExisting: LocationValidateDirective, multi: true }],
})
export class LocationValidateDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    if (Validators.required(control)) {
      return null;
    }
    return null;
  }
}
