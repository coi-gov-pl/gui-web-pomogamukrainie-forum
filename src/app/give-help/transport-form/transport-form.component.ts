import { Component } from '@angular/core';
import { defaults } from '@app/shared/utils';
import { TransportOfferDefinitionDTO } from '../../core/api/model/transportOfferDefinitionDTO';
import { Offer, TempTransportOfferDefinitionDTO } from '../../shared/models/give-help.model';

@Component({
  selector: 'app-transport-form',
  templateUrl: './transport-form.component.html',
  styleUrls: ['./transport-form.component.scss'],
})
export class TransportFormComponent {
  minDate: Date = new Date();

  constructor() {}

  data = defaults<TempTransportOfferDefinitionDTO>();

  handleSubmit(offer: Offer): void {
    console.log({
      ...offer,
      ...this.data,
    });
  }
}
