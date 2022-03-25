import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, Validators } from '@angular/forms';
import { ErrorCode } from '../components/field-error/errors';

const DIGIT_REGEX = /[^0-9]+/g;
@Directive({
  selector: '[ngModel][appMinMaxValidate]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MinMaxValidateDirective, multi: true }],
})
export class MinMaxValidateDirective implements Validator {
  min = -Infinity;
  max = Infinity;
  required = false;

  @Input() appMinMaxValidate: { min?: number; max?: number; required?: boolean } = {};

  @Output() ngModelChange: EventEmitter<number> = new EventEmitter();

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event']) onInputChange(event: InputEvent) {
    const initalValue = this.el.nativeElement.value;
    const newValue = initalValue.replace(DIGIT_REGEX, '');
    this.ngModelChange.emit(newValue);
    this.el.nativeElement.value = newValue;
  }

  validate(control: AbstractControl): ValidationErrors | null {
    this.getSettings();
    const error: ValidationErrors = {};
    const value = control.value ? control.value.replace(DIGIT_REGEX, '') : null;
    const valueNumber = Number(value);

    if (!value && !this.required) {
      return null;
    }

    if (!value && this.required) {
      error[ErrorCode.required] = {};
      return error;
    }

    if (Number.isNaN(valueNumber)) {
      error[ErrorCode.notNumber] = { value: value };
      return error;
    }

    if (value !== valueNumber.toString()) {
      error[ErrorCode.notNumber] = { value: value };
      return error;
    }

    if (valueNumber < this.min) {
      error[ErrorCode.min] = { value: value };
      return error;
    }

    if (valueNumber > this.max) {
      error[ErrorCode.max] = { value: value };
      return error;
    }

    return null;
  }

  private getSettings() {
    this.min = this.appMinMaxValidate.min === undefined ? -Infinity : this.appMinMaxValidate.min;
    this.max = this.appMinMaxValidate.max === undefined ? Infinity : this.appMinMaxValidate.max;
    this.required = this.appMinMaxValidate.required === undefined ? false : this.appMinMaxValidate.required;
  }
}
