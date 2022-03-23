import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, Validators } from '@angular/forms';
import { ErrorCode } from '../components/field-error/errors';

const DIGIT_REGEX = /[^0-9]+/g;
@Directive({
  selector: '[ngModel][appMinValidate],[ngModel][appMaxValidate]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MinMaxValidateDirective, multi: true }],
})
export class MinMaxValidateDirective implements Validator {
  @Input() appMinValidate = -Infinity;
  @Input() appMaxValidate = Infinity;

  @Output() ngModelChange: EventEmitter<any> = new EventEmitter();

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event']) onInputChange(event: any) {
    const initalValue = this.el.nativeElement.value;
    const newValue = initalValue.replace(DIGIT_REGEX, '');
    this.ngModelChange.emit(newValue);
    this.el.nativeElement.value = newValue;
  }

  validate(control: AbstractControl): ValidationErrors | null {
    if (Validators.required(control)) {
      return null;
    }

    const error: ValidationErrors = {};
    const value = control.value.replace(DIGIT_REGEX, '');
    const valueNumber = Number(value);

    if (isNaN(valueNumber)) {
      error[ErrorCode.notNumber] = { value: value };
      return error;
    }

    if (value !== valueNumber.toString()) {
      error[ErrorCode.notNumber] = { value: value };
      return error;
    }

    if (this.appMinValidate !== -Infinity && valueNumber < this.appMinValidate) {
      error[ErrorCode.min] = { value: value };
      return error;
    }

    if (this.appMaxValidate !== Infinity && valueNumber > this.appMaxValidate) {
      error[ErrorCode.max] = { value: value };
      return error;
    }

    return null;
  }
}
