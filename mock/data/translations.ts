import { OffersTranslationsOffer } from '@app/core/api/api/translationsResource.service';
import {
  TranslationsOffer,
  TranslationsOfferDefinitionDTO,
} from 'src/app/find-help/translations-search/translations-search-form/translations-search-form.component';

export const translationsOffer = (body: TranslationsOfferDefinitionDTO): TranslationsOffer => {
  return {
    ...body,
    id: 1,
    userFirstName: 'example',
    modifiedDate: new Date().toISOString(),
    type: 'TRANSLATIONS',
  };
};

export const translationsList: OffersTranslationsOffer = {
  content: [
    {
      id: 9999,
      userFirstName: 'Marta',
      title: 'Tłumacz przysięgły pomoże',
      description: 'Witam, jestem tłumaczem przysięgłeym pomogę w tłumaczeniach dokumentów.',
      modifiedDate: '2022-03-14T10:36:12Z',
      location: { region: 'woj. mazowieckie, pow. Warszawa, gm. Warszawa', city: 'Warszawa' },
      language: ['PL', 'EN'],
      mode: ['TELEWORK'],
      type: 'TRANSLATIONS',
    },
    {
      id: 10000,
      userFirstName: 'Marta',
      title: 'Tłumacz przysięgły od Ukrainskiego',
      description: 'Witam, jestem tłumaczem przysięgłeym pomogę w tłumaczeniach dokumentów z języka Ukrainskiego.',
      modifiedDate: '2022-03-14T10:36:12Z',
      location: { region: 'woj. mazowieckie, pow. Warszawa, gm. Warszawa', city: 'Warszawa' },
      language: ['PL', 'UA'],
      mode: ['TELEWORK'],
      type: 'TRANSLATIONS',
    },
  ],
  totalElements: 2,
  totalPages: 1,
};
