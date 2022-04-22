import { AccommodationOffer, JobOffer } from '@app/core/api';
import { PREFIXES } from '../consts';
import { CategoryNameKey } from '../models';
import { HealthOffer } from '../../core/api/model/healthOffer';
import { LawOffer } from '../../core/api/model/lawOffer';
import { MaterialAidOffer } from '../../core/api/model/materialAidOffer';
import { TransportOffer } from '../../core/api/model/transportOffer';

export const PHONE_HELPER = {
  initPhoneOnEdit: (context: any, category: CategoryNameKey) => {
    if (category == CategoryNameKey.ACCOMMODATION) {
      context.accommodationsResourceService.getAccommodations(context.offerId).subscribe((resp: AccommodationOffer) => {
        context.phone.phoneNumber = resp.phoneNumber || '';
        if (resp.phoneCountryCode) {
          context.phone.prefix = PREFIXES.find((v) => v.prefix === resp.phoneCountryCode)?.prefix || '';
        }
        context.data = resp;
      });
    } else if (category == CategoryNameKey.HEALTH) {
      context.HealthResourceService.getHealth(context.offerId).subscribe((resp: HealthOffer) => {
        context.phone.phoneNumber = resp.phoneNumber || '';
        if (resp.phoneCountryCode) {
          context.phone.prefix = PREFIXES.find((v) => v.prefix === resp.phoneCountryCode)?.prefix || '';
        }
        context.data = resp;
      });
    } else if (category == CategoryNameKey.JOB) {
      context.jobResourceService.getJob(context.offerId).subscribe((resp: JobOffer) => {
        context.phone.phoneNumber = resp.phoneNumber || '';
        if (resp.phoneCountryCode) {
          context.phone.prefix = PREFIXES.find((v) => v.prefix === resp.phoneCountryCode)?.prefix || '';
        }
        context.data = resp;
      });
    } else if (category == CategoryNameKey.LEGAL_HELP) {
      context.LawResourceService.getLaw(context.offerId).subscribe((resp: LawOffer) => {
        context.phone.phoneNumber = resp.phoneNumber || '';
        if (resp.phoneCountryCode) {
          context.phone.prefix = PREFIXES.find((v) => v.prefix === resp.phoneCountryCode)?.prefix || '';
        }
        context.data = resp;
      });
    } else if (category == CategoryNameKey.MATERIAL_HELP) {
      context.materialAidResourceService.getMaterialAid(context.offerId).subscribe((resp: MaterialAidOffer) => {
        context.phone.phoneNumber = resp.phoneNumber || '';
        if (resp.phoneCountryCode) {
          context.phone.prefix = PREFIXES.find((v) => v.prefix === resp.phoneCountryCode)?.prefix || '';
        }
        context.data = resp;
      });
    } else if (category == CategoryNameKey.TRANSPORT) {
      context.transportResourceService.getTransport(context.offerId).subscribe((resp: TransportOffer) => {
        context.phone.phoneNumber = resp.phoneNumber || '';
        if (resp.phoneCountryCode) {
          context.phone.prefix = PREFIXES.find((v) => v.prefix === resp.phoneCountryCode)?.prefix || '';
        }
        context.data = resp;
      });
    }
  },

  preparePhoneNumber: (context: any) => {
    if (context.phone.phoneNumber) {
      context.data.phoneNumber = `${context.phone.prefix}${context.phone.phoneNumber}`;
    } else {
      context.data.phoneNumber = undefined;
    }
  },
};
