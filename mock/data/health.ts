import { HealthOfferDefinitionDTO, OffersVMHealthOfferVM, HealthOfferVM } from '@app/core/api';

export const healthOffer = (body: HealthOfferDefinitionDTO): HealthOfferVM => {
  return {
    ...body,
    id: 1,
    userFirstName: 'example',
    modifiedDate: new Date().toISOString(),
    type: 'HEALTH',
  };
};

export const healthList: OffersVMHealthOfferVM = {
  content: [
    {
      id: 7,
      userFirstName: 'Grzegorz',
      title: 'Pomoc psychologiczna',
      description: 'Oferuję pomoc psychologiczną dla obywateli Ukrainy.',
      modifiedDate: '2022-03-14T10:36:12Z',
      location: { region: 'woj. mazowieckie, pow. Warszawa, gm. Warszawa', city: 'Warszawa' },
      mode: ['IN_FACILITY', 'AT_HOME', 'ONLINE', 'BY_PHONE'],
      specialization: 'PSYCHOLOGY',
      language: ['PL', 'UA'],
      phoneCountryCode: '48',
      phoneNumber: '48123456789',
      type: 'HEALTH',
    },
    {
      id: 777,
      userFirstName: 'Adam',
      title: 'Centrum psychologicze, oferuje pomoc',
      description: 'Oferujemy pomoc psychologiczną dla obywateli Ukrainy.',
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
  totalElements: 2,
  totalPages: 1,
};
