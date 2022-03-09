import { Component, EventEmitter, Output } from '@angular/core';
import { defaults } from '@app/shared/utils';

export interface Offer {
  title: string;
  description: string;
}

@Component({
  selector: 'app-offer-form',
  templateUrl: './offer-form.component.html',
  styleUrls: ['./offer-form.component.scss'],
})
export class OfferFormComponent {
  data = defaults<Offer>();

  @Output() submitOffer = new EventEmitter<Offer>();
}
