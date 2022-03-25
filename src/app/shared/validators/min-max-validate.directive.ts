import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, Validators } from '@angular/forms';
import { ErrorCode } from '../components/field-error/errors';

const DIGIT_REGEX = /[^0-9]+/g;
@Directive({
  selector: '[ngModel][appMinMaxValidate]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MinMaxValidateDirective, multi: true }],
})
export class MinMaxValidateDirective implements Validator {
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
    const { min, max, required } = this.getSettings();
    const error: ValidationErrors = {};
    const value = control.value?.replace(DIGIT_REGEX, '');
    const valueNumber = Number(value);

    if (!value && !required) {
      return null;
    }

    if (!value && required) {
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

    if (valueNumber < min) {
      error[ErrorCode.min] = { value: value };
      return error;
    }

    if (valueNumber > max) {
      error[ErrorCode.max] = { value: value };
      return error;
    }

    return null;
  }

  private getSettings() {
    return {
      min: this.appMinMaxValidate.min === undefined ? -Infinity : this.appMinMaxValidate.min,
      max: this.appMinMaxValidate.max === undefined ? Infinity : this.appMinMaxValidate.max,
      required: this.appMinMaxValidate.required === undefined ? false : this.appMinMaxValidate.required,
    };
  }
}
