import { Component } from '@angular/core';
import { Offer } from '../offer-form/offer-form.component';
import { defaults } from '@app/shared/utils';
import { TransportOfferDefinitionDTO } from '../../core/api/model/transportOfferDefinitionDTO';

@Component({
  selector: 'app-transport-form',
  templateUrl: './transport-form.component.html',
  styleUrls: ['./transport-form.component.scss'],
})
export class TransportFormComponent {
  constructor() {}

  data = defaults<TransportOfferDefinitionDTO>();

  handleSubmit(offer: Offer) {
    console.log({
      ...offer,
      ...this.data,
    });
  }
}
