import { Component } from '@angular/core';
import { defaults } from '@app/shared/utils';
import { AccommodationOfferDefinitionDTO } from '../../core/api/model/accommodationOfferDefinitionDTO';
import { PHONE_NUMBER_REGEX, PREFIXES, LANGUAGES, LENGTHOFSTAY } from '@app/shared/temporary-consts';
import { AccommodationsResourceService } from '@app/core/api';

@Component({
  selector: 'app-accommodation-form',
  templateUrl: './accommodation-form.component.html',
  styleUrls: ['./accommodation-form.component.scss'],
})
export class AccommodationFormComponent {
  phonePrefix: string = '48';
  phoneNumber: string = '';
  LENGTHOFSTAY = LENGTHOFSTAY;
  LANGUAGES = LANGUAGES;
  PREFIXES = PREFIXES;
  PHONE_NUMBER_REGEX = PHONE_NUMBER_REGEX;

  data = defaults<AccommodationOfferDefinitionDTO>({
    hostLanguage: [],
  });

  constructor(private accommodationsResourceService: AccommodationsResourceService) {}
  onPhoneNumberChange(): void {
    // Waiting for TransportOfferDefinitionDTO receive a phoneNumber prop
    // this.data.phoneNumber = this.phonePrefix + this.phoneNumber;
  }

  submitOffer(): void {
    this.accommodationsResourceService.createAccommodations(this.data).subscribe((response) => {});
  }
}
