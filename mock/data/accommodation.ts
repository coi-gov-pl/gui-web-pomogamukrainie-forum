import { AccommodationOffer, AccommodationOfferDefinitionDTO } from '@app/core/api';

export const accommodationOffer = (body: AccommodationOfferDefinitionDTO): AccommodationOffer => {
  return {
    ...body,
    id: 1,
    userFirstName: 'example',
    modifiedDate: new Date().toISOString(),
  };
};
