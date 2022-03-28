import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { MATCH_NON_DIGITS, MATCH_SPACES, PREFIXES } from '@app/shared/consts';

@Component({
  selector: 'app-offer-phone-number-input',
  templateUrl: './offer-phone-number-input.component.html',
  styleUrls: ['./offer-phone-number-input.component.scss'],
  // Needed to attach the input to the parent form.
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class OfferPhoneNumberInputComponent {
  PREFIXES = PREFIXES;

  phonePrefix: string = '';
  phoneNumber: string = '';

  @Output() phoneNumberChange = new EventEmitter<string | undefined>();

  @ViewChild('phoneInput') phoneInput!: ElementRef<HTMLInputElement>;

  onPhoneNumberChange($event: Event) {
    let val = ($event.target as HTMLInputElement).value;
    val = val.replace(MATCH_NON_DIGITS, '').replace(MATCH_SPACES, '');
    this.phoneInput.nativeElement.value = val;
    this.phoneNumber = val;
  }

  emitPhoneNumber() {
    if (this.phoneNumber) {
      this.phoneNumberChange.emit(this.phonePrefix + this.phoneNumber);
    } else {
      this.phoneNumberChange.emit(undefined);
    }
  }
}
