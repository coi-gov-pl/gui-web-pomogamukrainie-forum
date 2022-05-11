import { OffersTranslationOffer, TranslationOffer, TranslationOfferDefinitionDTO } from '@app/core/api';

export const translationsOffer = (body: TranslationOfferDefinitionDTO): TranslationOffer => {
  return {
    ...body,
    id: 1,
    userFirstName: 'example',
    modifiedDate: new Date().toISOString(),
    type: 'TRANSLATION',
  };
};

export const translationsList: OffersTranslationOffer = {
  content: [
    {
      id: 9999,
      userFirstName: 'Marta',
      title: 'Tłumacz przysięgły pomoże',
      description: 'Witam, jestem tłumaczem przysięgłeym pomogę w tłumaczeniach dokumentów.',
      modifiedDate: '2022-03-14T10:36:12Z',
      location: { region: 'woj. mazowieckie, pow. Warszawa, gm. Warszawa', city: 'Warszawa' },
      language: ['PL', 'EN'],
      mode: ['BY_PHONE'],
      type: 'TRANSLATION',
    },
    {
      id: 10000,
      userFirstName: 'Marta',
      title: 'Tłumacz przysięgły od Ukrainskiego',
      description: 'Witam, jestem tłumaczem przysięgłeym pomogę w tłumaczeniach dokumentów z języka Ukrainskiego.',
      modifiedDate: '2022-03-14T10:36:12Z',
      location: { region: 'woj. mazowieckie, pow. Warszawa, gm. Warszawa', city: 'Warszawa' },
      language: ['PL', 'UA'],
      mode: ['BY_PHONE'],
      type: 'TRANSLATION',
    },
  ],
  totalElements: 2,
  totalPages: 1,
};
