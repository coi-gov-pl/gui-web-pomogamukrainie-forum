import {Component, EventEmitter, Output,} from '@angular/core';

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
  data: Offer = {
    title: '',
    description: '',
  };

  @Output() onSubmit = new EventEmitter<Offer>();
}
