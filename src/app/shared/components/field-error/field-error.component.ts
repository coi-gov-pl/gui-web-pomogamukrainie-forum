import { Component, Input, NgModule, OnInit } from '@angular/core';
import { NgModel, FormControl } from '@angular/forms';
import { ErrorCode, ErrorTranslationKey } from './errors';

@Component({
  selector: 'app-field-error',
  templateUrl: './field-error.component.html',
  styleUrls: ['./field-error.component.scss'],
})
export class FieldErrorComponent {
  @Input() model!: NgModel;
  @Input() locationControl!: FormControl;
  constructor() {}

  // mat-error "reserves enough space to display one error message at a time" so we get first error
  getError(): any {
    if (this.model) {
      let validationErrors = this.model.errors;
      if (validationErrors) {
        const errors = Object.keys(validationErrors);
        if (errors.length > 0) {
          return ErrorTranslationKey[errors[0] as ErrorCode];
        }
      }
    } else if (this.locationControl) {
      let validationErrors = this.locationControl.errors;
      if (validationErrors) {
        const errors = Object.keys(validationErrors);
        if (errors.length > 0) {
          return ErrorTranslationKey[errors[0] as ErrorCode];
        }
      } else if (this.locationControl.value && !this.locationControl.value?.region) {
        return this.locationControl.setErrors({ locationIllegalCharacters: true });
      } else {
        return this.locationControl.setErrors(null);
      }
    }
    return '';
  }
}
