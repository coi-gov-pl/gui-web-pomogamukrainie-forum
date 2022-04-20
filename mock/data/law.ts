import { LawOfferDefinitionDTO, OffersLawOffer, LawOffer } from '@app/core/api';

export const lawOffer = (body: LawOfferDefinitionDTO): LawOffer => {
  return {
    ...body,
    id: 1,
    userFirstName: 'example',
    modifiedDate: new Date().toISOString(),
    type: 'LAW',
  };
};

export const lawList: OffersLawOffer = {
  content: [
    {
      id: 79,
      userFirstName: 'Marta',
      title: 'Pomoc prawna dla obywateli Ukrainy',
      description: 'Oferuję pomoc prawną dla obywateli Ukrainy. Udzielę porad prawnych w zakresie prawa karnego.',
      modifiedDate: '2022-03-14T10:36:12Z',
      location: { region: 'woj. mazowieckie, pow. Warszawa, gm. Warszawa', city: 'Warszawa' },
      helpMode: ['STATIONARY', 'WITH_ACCESS', 'ONLINE', 'BY_EMAIL', 'BY_PHONE'],
      helpKind: ['LABOUR_LAW', 'IMMIGRATION_LAW', 'FAMILY_LAW', 'TAX_LAW', 'CIVIL_LAW', 'OTHER'],
      language: ['PL', 'UA'],
      phoneCountryCode: '48',
      phoneNumber: '48123456789',
      type: 'LAW',
    },
    {
      id: 779,
      userFirstName: 'Dominika',
      title: 'Pomoc prawna on-line',
      description: 'Udzielę pomocy prawnej on-line lub telefonicznie.',
      modifiedDate: '2022-04-15T10:36:12Z',
      location: { region: 'woj. mazowieckie, pow. Warszawa, gm. Warszawa', city: 'Warszawa' },
      helpMode: ['ONLINE', 'BY_PHONE'],
      helpKind: ['IMMIGRATION_LAW'],
      language: ['PL', 'UA'],
      phoneCountryCode: '48',
      phoneNumber: '48123456789',
      type: 'LAW',
    },
  ],
  totalElements: 2,
  totalPages: 1,
};
