import { Injectable } from '@angular/core';
import { AccommodationOfferVM, JobOfferVM, OtherOfferVM } from '@app/core/api';
import { PREFIXES } from '@app/shared/consts';
import { CategoryNameKey } from '@app/shared/models';
import { HealthOfferVM } from '@app/core/api/model/healthOfferVM';
import { LawOfferVM } from '@app/core/api/model/lawOfferVM';
import { MaterialAidOfferVM } from '@app/core/api/model/materialAidOfferVM';
import { TransportOfferVM } from '@app/core/api/model/transportOfferVM';
import { TranslationOfferVM } from '@app/core/api/model/translationOfferVM';

@Injectable()
export class OfferDataInitService {
  initOfferDataForEdit(context: any, category: CategoryNameKey) {
    if (category === CategoryNameKey.ACCOMMODATION) {
      context.accommodationsResourceService
        .getAccommodations(context.offerId)
        .subscribe((resp: AccommodationOfferVM) => {
          context.phone.phoneNumber = resp.phoneNumber || '';
          if (resp.phoneCountryCode) {
            context.phone.prefix = PREFIXES.find((v) => v.prefix === resp.phoneCountryCode)?.prefix || '';
          }
          context.data = resp;
        });
    } else if (category === CategoryNameKey.HEALTH) {
      context.HealthResourceService.getHealth(context.offerId).subscribe((resp: HealthOfferVM) => {
        context.phone.phoneNumber = resp.phoneNumber || '';
        if (resp.phoneCountryCode) {
          context.phone.prefix = PREFIXES.find((v) => v.prefix === resp.phoneCountryCode)?.prefix || '';
        }
        context.data = resp;
      });
    } else if (category === CategoryNameKey.JOB) {
      context.jobResourceService.getJob(context.offerId).subscribe((resp: JobOfferVM) => {
        context.phone.phoneNumber = resp.phoneNumber || '';
        if (resp.phoneCountryCode) {
          context.phone.prefix = PREFIXES.find((v) => v.prefix === resp.phoneCountryCode)?.prefix || '';
        }
        context.data = resp;
      });
    } else if (category === CategoryNameKey.LEGAL_HELP) {
      context.LawResourceService.getLaw(context.offerId).subscribe((resp: LawOfferVM) => {
        context.phone.phoneNumber = resp.phoneNumber || '';
        if (resp.phoneCountryCode) {
          context.phone.prefix = PREFIXES.find((v) => v.prefix === resp.phoneCountryCode)?.prefix || '';
        }
        context.data = resp;
      });
    } else if (category === CategoryNameKey.MATERIAL_HELP) {
      context.materialAidResourceService.getMaterialAid(context.offerId).subscribe((resp: MaterialAidOfferVM) => {
        context.phone.phoneNumber = resp.phoneNumber || '';
        if (resp.phoneCountryCode) {
          context.phone.prefix = PREFIXES.find((v) => v.prefix === resp.phoneCountryCode)?.prefix || '';
        }
        context.data = resp;
      });
    } else if (category === CategoryNameKey.TRANSPORT) {
      context.transportResourceService.getTransport(context.offerId).subscribe((resp: TransportOfferVM) => {
        context.phone.phoneNumber = resp.phoneNumber || '';
        if (resp.phoneCountryCode) {
          context.phone.prefix = PREFIXES.find((v) => v.prefix === resp.phoneCountryCode)?.prefix || '';
        }
        context.data = resp;
      });
    } else if (category === CategoryNameKey.TRANSLATIONS) {
      context.translationResourceService.getTranslation(context.offerId).subscribe((resp: TranslationOfferVM) => {
        context.phone.phoneNumber = resp.phoneNumber || '';
        if (resp.phoneCountryCode) {
          context.phone.prefix = PREFIXES.find((v) => v.prefix === resp.phoneCountryCode)?.prefix || '';
        }
        context.data = resp;
      });
    } else if (category === CategoryNameKey.OTHER) {
      context.otherResourceService.getOther(context.offerId).subscribe((resp: OtherOfferVM) => {
        context.phone.phoneNumber = resp.phoneNumber || '';
        if (resp.phoneCountryCode) {
          context.phone.prefix = PREFIXES.find((v) => v.prefix === resp.phoneCountryCode)?.prefix || '';
        }
        context.data = resp;
      });
    }
  }

  preparePhoneNumber(context: any) {
    if (context.phone.phoneNumber) {
      context.data.phoneNumber = `${context.phone.prefix}${context.phone.phoneNumber}`;
    } else {
      context.data.phoneNumber = undefined;
    }
  }
}
