import { HealthOfferDefinitionDTO, OffersHealthOffer, HealthOffer } from '@app/core/api';

export const healthOffer = (body: HealthOfferDefinitionDTO): HealthOffer => {
  return {
    ...body,
    id: 1,
    userFirstName: 'example',
    modifiedDate: new Date().toISOString(),
    type: 'HEALTH',
  };
};

export const healthList: OffersHealthOffer = {
  content: [
    {
      id: 79,
      userFirstName: 'Marta',
      title: 'Pomoc prawna dla obywateli Ukrainy',
      description: 'Oferuję pomoc prawną dla obywateli Ukrainy. Udzielę porad prawnych w zakresie prawa karnego.',
      modifiedDate: '2022-03-14T10:36:12Z',
      location: { region: 'woj. mazowieckie, pow. Warszawa, gm. Warszawa', city: 'Warszawa' },
      mode: ['ONLINE', 'BY_PHONE'],
      specialization: 'PSYCHOLOGY',
      language: ['PL', 'UA'],
      phoneCountryCode: '48',
      phoneNumber: '48123456789',
      type: 'HEALTH',
    },
  ],
  totalElements: 1,
  totalPages: 1,
};
