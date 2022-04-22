import { AccommodationOffer } from '@app/core/api';
import { PREFIXES } from '../consts';
import { PhoneNumber } from '../models/phone.model';

export const PHONE_HELPER = {
  initPhoneOnEdit: (context: any) => {
    context.accommodationsResourceService.getAccommodations(context.offerId).subscribe((resp: AccommodationOffer) => {
      context.phone.phoneNumber = resp.phoneNumber || '';
      if (resp.phoneCountryCode) {
        context.phone.prefix = PREFIXES.find((v) => v.prefix === resp.phoneCountryCode)?.prefix || '';
      }
      context.data = resp;
    });
  },

  preparePhoneNumber: (context: any) => {
    if (context.phone.phoneNumber) {
      context.data.phoneNumber = `${context.phone.prefix}${context.phone.phoneNumber}`;
    } else {
      context.data.phoneNumber = undefined;
    }
  },
};
