import { AccommodationOfferDefinitionDTO, AccommodationOfferVM, OffersVMAccommodationOfferVM } from '@app/core/api';

export const accommodationOffer = (body: AccommodationOfferDefinitionDTO): AccommodationOfferVM => {
  return {
    ...body,
    id: 1,
    userFirstName: 'example',
    modifiedDate: new Date().toISOString(),
    type: 'ACCOMMODATION',
  };
};

export const accommodationsList: OffersVMAccommodationOfferVM = {
  content: [
    {
      id: 1,
      userFirstName: 'Basia',
      title: 'Mieszkanie w bloku, 2 osoby - Rzeszów, woj. podkarpackie',
      description:
        'nocleg noclegmazowieckie transport Dolnośląskie, miejscowość Wrocław - ok. 5 km od Dworca głównego. Kawalerka na wyłączność pomieści 2 osoby + zwierzęta są mile widziane. Okres: 2 miesiące, Bezpłatnie....',
      modifiedDate: '2022-03-14T10:36:12Z',
      location: { region: 'woj. warmińsko-mazurskie, pow. iławski, gm. Iława', city: 'Iława' },
      guests: 2,
      lengthOfStay: 'MONTH_2',
      hostLanguage: ['PL', 'UA'],
      phoneCountryCode: '48',
      phoneNumber: '123456789',
      type: 'ACCOMMODATION',
    },
    {
      id: 3,
      userFirstName: 'Piotr',
      title: 'Mieszkanie w bloku, 4 osoby - Międzygórze, woj. podlaskie',
      description:
        'Kawalerka na wyłączność pomieści 2 osoby + zwierzęta są mile widziane. Okres: 2 miesiące, Bezpłatnie....Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      modifiedDate: '2022-03-14T10:36:12Z',
      location: { region: 'woj. śląskie, pow. Katowice, gm. Katowice', city: 'katowice' },
      guests: 4,
      lengthOfStay: 'LONGER',
      hostLanguage: ['PL', 'UA'],
      phoneCountryCode: '48',
      phoneNumber: '456789123',
      type: 'ACCOMMODATION',
    },
    {
      id: 13,
      userFirstName: 'Basia',
      title: 'Mieszkanie w bloku, 2 osoby - Rzeszów, woj. podkarpackie',
      description:
        'nocleg noclegmazowieckie transport Dolnośląskie, miejscowość Wrocław - ok. 5 km od Dworca głównego. Kawalerka na wyłączność pomieści 2 osoby + zwierzęta są mile widziane. Okres: 2 miesiące, Bezpłatnie....',
      modifiedDate: '2022-03-16T14:43:15Z',
      location: { region: 'podkarpackie', city: 'Rzeszów' },
      guests: 2,
      lengthOfStay: 'MONTH_2',
      hostLanguage: ['PL', 'UA'],
      phoneCountryCode: '48',
      phoneNumber: '789123456',
      type: 'ACCOMMODATION',
    },
    {
      id: 15,
      userFirstName: 'Piotr',
      title: 'Mieszkanie w bloku, 4 osoby - Międzygórze, woj. podlaskie',
      description:
        'Kawalerka na wyłączność pomieści 2 osoby + zwierzęta są mile widziane. Okres: 2 miesiące, Bezpłatnie....',
      modifiedDate: '2022-03-16T14:43:15Z',
      location: { region: 'podlaskie', city: 'Międzygórze' },
      guests: 4,
      lengthOfStay: 'LONGER',
      hostLanguage: ['PL', 'UA'],
      phoneCountryCode: '48',
      phoneNumber: '891234567',
      type: 'ACCOMMODATION',
    },
    {
      id: 30,
      userFirstName: 'Piotr',
      title: 'TEXT_NO_SPACESMieszkaniewbloku,4osobyMiędzygórze,woj.podlaskie',
      description:
        'TEXT_NO_SPACESKawalerkanawyłącznośćpomieści2osoby+zwierzętasąmilewidziane.Okres:2miesiące,Bezpłatnie....',
      modifiedDate: '2022-03-16T14:43:15Z',
      location: { region: 'podlaskie', city: 'Międzygórze' },
      guests: 4,
      lengthOfStay: 'LONGER',
      hostLanguage: ['PL', 'UA'],
      phoneCountryCode: '48',
      phoneNumber: '891234567',
      type: 'ACCOMMODATION',
    },
  ],
  totalElements: 4,
  totalPages: 1,
};
