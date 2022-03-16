import { Component, Input, NgModule, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ErrorCode, ErrorTranslationKey } from './errors';

@Component({
  selector: 'app-field-error',
  templateUrl: './field-error.component.html',
  styleUrls: ['./field-error.component.scss'],
})
export class FieldErrorComponent {
  @Input() model!: NgModel;

  constructor() {}

  // mat-error "reserves enough space to display one error message at a time" so we get first error
  getError(): string {
    const validationErrors = this.model.errors;
    if (validationErrors) {
      const errors = Object.keys(validationErrors);
      if (errors.length > 0) {
        return ErrorTranslationKey[errors[0] as ErrorCode];
      }
    }
    return '';
  }
}
