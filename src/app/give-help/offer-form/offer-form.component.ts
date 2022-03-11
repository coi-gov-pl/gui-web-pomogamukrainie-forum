import { Component, EventEmitter, Output } from '@angular/core';
import { defaults } from '@app/shared/utils';
import { Prefix, Offer } from '@app/shared/models/give-help.model';

@Component({
  selector: 'app-offer-form',
  templateUrl: './offer-form.component.html',
  styleUrls: ['./offer-form.component.scss'],
})
export class OfferFormComponent {
  data = defaults<Offer>();
  PHONE_NUMBER_REGEX = /^\d{9}$/;
  prefixes: Prefix[] = [
    {
      countryCode: 'pl_PL',
      prefix: 48,
    },
    {
      countryCode: 'uk_UA',
      prefix: 380,
    },
  ];

  phonePrefix: string = '';
  phoneNumber: string = '';

  @Output() submitOffer = new EventEmitter<Offer>();

  onPhoneNumberChange(): void {
    this.data.phoneNumber = this.phonePrefix + this.phoneNumber;
  }
}
