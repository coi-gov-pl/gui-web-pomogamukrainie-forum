// Temporary types needed before backend fixes itself
// Ideally, link each workaround to a JIRA after fixing which
// it can be removed.

import {
  AccommodationOffer as AccommodationOfferFromAPI,
  MaterialAidOffer as MaterialAidOfferFromAPI,
  OffersAccommodationOffer as OffersAccommodationOfferFromAPI,
  OffersMaterialAidOffer as OffersMaterialAidOfferFromAPI,
  OffersTransportOffer as OffersTransportOfferFromAPI,
  OffersBaseOffer as OffersBaseOfferFromAPI,
  TransportOffer as TransportOfferFromAPI,
} from '@app/core/api';

// Remove once https://jira.sysopspolska.pl/browse/POM-299 is fixed.
export type AccommodationOffer = Omit<AccommodationOfferFromAPI, 'type'> & {
  type: 'accommodation';
};
// Remove once https://jira.sysopspolska.pl/browse/POM-299 is fixed.
export type MaterialAidOffer = Omit<MaterialAidOfferFromAPI, 'type'> & {
  type: 'materialAid';
};
// Remove once https://jira.sysopspolska.pl/browse/POM-299 is fixed.
export type TransportOffer = Omit<TransportOfferFromAPI, 'type'> & {
  type: 'transport';
};

// Remove once https://jira.sysopspolska.pl/browse/POM-299 is fixed.
export type OffersAccommodationOffer = Omit<OffersAccommodationOfferFromAPI, 'content'> & {
  content?: Array<AccommodationOffer>;
};
// Remove once https://jira.sysopspolska.pl/browse/POM-299 is fixed.
export type OffersMaterialAidOffer = Omit<OffersMaterialAidOfferFromAPI, 'content'> & {
  content?: Array<MaterialAidOffer>;
};
// Remove once https://jira.sysopspolska.pl/browse/POM-299 is fixed.
export type OffersTransportOffer = Omit<OffersTransportOfferFromAPI, 'content'> & {
  content?: Array<TransportOffer>;
};
// Remove once https://jira.sysopspolska.pl/browse/POM-299 is fixed.
export type OffersBaseOffer = Omit<OffersBaseOfferFromAPI, 'content'> & {
  content?: Array<AccommodationOffer | MaterialAidOffer | TransportOffer>;
};
