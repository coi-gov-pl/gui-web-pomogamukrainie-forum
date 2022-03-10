import { Component, EventEmitter, Output } from '@angular/core';
import { defaults } from '@app/shared/utils';

export interface Offer {
  title: string;
  description: string;
  phoneNumber?: string;
}
interface Prefix {
  prefix: number;
}

@Component({
  selector: 'app-offer-form',
  templateUrl: './offer-form.component.html',
  styleUrls: ['./offer-form.component.scss'],
})
export class OfferFormComponent {
  data = defaults<Offer>();

  prefixes: Prefix[] = [{ prefix: 48 }, { prefix: 380 }];
  phonePrefix: string = '';
  phoneNumber: string = '';

  @Output() submitOffer = new EventEmitter<Offer>();

  onPhoneNumberChange() {
    this.data.phoneNumber = this.phonePrefix + this.phoneNumber;
  }
}
