import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { MATCH_NON_DIGITS, MATCH_SPACES, PREFIXES } from '@app/shared/consts';
import { PhoneNumber } from '@app/shared/models';
import { defaults } from '@app/shared/utils';

@Component({
  selector: 'app-phone-input',
  templateUrl: './phone-input.component.html',
  styleUrls: ['./phone-input.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class PhoneInputComponent {
  PREFIXES = PREFIXES;
  @Input() phone = defaults<PhoneNumber>();
  @Output() phoneChange = new EventEmitter<PhoneNumber>();
  @ViewChild('phoneInput') phoneInput!: ElementRef<HTMLInputElement>;

  onPrefixChange() {
    this.phoneChange.emit(this.phone);
  }

  onPhoneNumberChange($event: Event) {
    let val = ($event.target as HTMLInputElement).value;
    val = val.replace(MATCH_NON_DIGITS, '').replace(MATCH_SPACES, '');
    this.phoneInput.nativeElement.value = val;
    this.phone.phoneNumber = val;
    this.phoneChange.emit(this.phone);
  }

  // findPrefix(prefix: string) {
  //   this.phone.prefix = PREFIXES.find((v) => v.prefix === prefix)?.prefix || '';
  // }

  // emitPhoneNumber() {
  //   if (this.phone.phoneNumber) {
  //     this.phoneNumberChange.emit(this.phone);
  //   } else {
  //     this.phoneNumberChange.emit(undefined);
  //   }
  // }
}
