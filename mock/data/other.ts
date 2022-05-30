import { OffersVMOtherOfferVM, OtherOfferVM, OtherOfferDefinitionDTO } from '@app/core/api';

export const otherOffer = (body: OtherOfferDefinitionDTO): OtherOfferVM => {
  return {
    ...body,
    id: 1,
    userFirstName: 'example',
    modifiedDate: new Date().toISOString(),
    type: 'OTHER',
  };
};

export const otherList: OffersVMOtherOfferVM = {
  content: [
    {
      id: 10001,
      userFirstName: 'Marta',
      title: 'Ogłoszenie dowolne',
      description: 'Treść ogłoszenia dowolnego.',
      modifiedDate: '2022-03-14T10:36:12Z',
      location: { region: 'woj. mazowieckie, pow. Warszawa, gm. Warszawa', city: 'Warszawa' },
      type: 'OTHER',
    },
  ],
  totalElements: 1,
  totalPages: 1,
};
