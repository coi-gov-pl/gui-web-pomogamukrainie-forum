import { AccommodationOffer, AccommodationOfferDefinitionDTO, OffersAccommodationOffer } from '@app/core/api';

export const accommodationOffer = (body: AccommodationOfferDefinitionDTO): AccommodationOffer => {
  return {
    ...body,
    id: 1,
    userFirstName: 'example',
    modifiedDate: new Date().toISOString(),
  };
};

export const accommodationsList: OffersAccommodationOffer = {
  content: [
    {
      id: 1,
      userFirstName: 'Basia',
      title: 'Mieszkanie w bloku, 2 osoby - Rzeszów, woj. podkarpackie',
      description:
        'nocleg noclegmazowieckie transport Dolnośląskie, miejscowość Wrocław - ok. 5 km od Dworca głównego. Kawalerka na wyłączność pomieści 2 osoby + zwierzęta są mile widziane. Okres: 2 miesiące, Bezpłatnie....',
      modifiedDate: '2022-03-14T10:36:12Z',
      location: { region: 'podkarpackie', city: 'Rzeszów' },
      guests: 2,
      lengthOfStay: 'MONTH_2',
      hostLanguage: ['PL', 'UA'],
    },
    {
      id: 3,
      userFirstName: 'Piotr',
      title: 'Mieszkanie w bloku, 4 osoby - Międzygórze, woj. podlaskie',
      description:
        'Kawalerka na wyłączność pomieści 2 osoby + zwierzęta są mile widziane. Okres: 2 miesiące, Bezpłatnie....',
      modifiedDate: '2022-03-14T10:36:12Z',
      location: { region: 'podlaskie', city: 'Międzygórze' },
      guests: 4,
      lengthOfStay: 'LONGER',
      hostLanguage: ['PL', 'UA'],
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
    },
  ],
  totalElements: 4,
  totalPages: 1,
};
