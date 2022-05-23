import { OtherOffer, OtherOfferDefinitionDTO } from '@app/core/api';

export const otherOffer = (body: OtherOfferDefinitionDTO): OtherOffer => {
  return {
    ...body,
    id: 1,
    userFirstName: 'example',
    modifiedDate: new Date().toISOString(),
    type: 'OTHER',
  };
};
