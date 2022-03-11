import { Component } from '@angular/core';
import { defaults } from '@app/shared/utils';
import { TransportOfferDefinitionDTO } from '@app/core/api/model/transportOfferDefinitionDTO';
import { TransportResourceService } from '../../core/api/api/transportResource.service';
import { prefixes, PHONE_NUMBER_REGEX } from '@app/shared/temporary-consts';

@Component({
  selector: 'app-transport-form',
  templateUrl: './transport-form.component.html',
  styleUrls: ['./transport-form.component.scss'],
})
export class TransportFormComponent {
  minDate: Date = new Date();
  prefixes = prefixes;
  PHONE_NUMBER_REGEX = PHONE_NUMBER_REGEX;
  phonePrefix: string = '48';
  phoneNumber: string = '';
  data = defaults<TransportOfferDefinitionDTO>();

  constructor(private transportResourceService: TransportResourceService) {}

  onPhoneNumberChange(): void {
    // Waiting for TransportOfferDefinitionDTO receive a phoneNumber prop
    // this.data.phoneNumber = this.phonePrefix + this.phoneNumber;
  }

  submitOffer(): void {
    this.transportResourceService.createTransport(this.data);
  }
}
