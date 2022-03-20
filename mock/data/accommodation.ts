import { AccommodationOfferDefinitionDTO } from '@app/core/api';
import { AccommodationOffer, OffersAccommodationOffer } from '@app/shared/models';

export const accommodationOffer = (body: AccommodationOfferDefinitionDTO): AccommodationOffer => {
  return {
    ...body,
    id: 1,
    userFirstName: 'example',
    modifiedDate: new Date().toISOString(),
    type: 'accommodation',
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
      phoneNumber: '48123456789',
      type: 'accommodation',
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
      phoneNumber: '48456789123',
      type: 'accommodation',
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
      phoneNumber: '48789123456',
      type: 'accommodation',
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
      phoneNumber: '48891234567',
      type: 'accommodation',
    },
  ],
  totalElements: 4,
  totalPages: 1,
};
