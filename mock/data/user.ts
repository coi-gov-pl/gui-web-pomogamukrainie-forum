import { UserInfo, OffersBaseOffer } from '@app/core/api';

export const loggedUserInfo: UserInfo = { email: 'john@email.invalid', firstName: 'John', phoneNumber: undefined };

export const userOffers: OffersBaseOffer = {
  content: [
    {
      id: 1,
      userFirstName: 'Basia',
      title: 'Mieszkanie w bloku, 2 osoby - Rzeszów, woj. podkarpackie',
      description:
        'nocleg noclegmazowieckie transport Dolnośląskie, miejscowość Wrocław - ok. 5 km od Dworca głównego. Kawalerka na wyłączność pomieści 2 osoby + zwierzęta są mile widziane. Okres: 2 miesiące, Bezpłatnie....',
      modifiedDate: '2022-03-14T10:36:12Z',
      location: {
        region: 'podkarpackie',
        city: 'Rzeszów',
      },
      guests: 2,
      lengthOfStay: 'MONTH_2',
      hostLanguage: ['PL', 'UA'],
      phoneNumber: '48123456789',
      type: 'ACCOMMODATION',
    },
    {
      id: 19,
      userFirstName: 'Maria',
      title: 'Mam do oddania zabawki dziecięce',
      description:
        'worek zabawek do oddania, wszystkie w dobrym stanie, dla dziecka w wieku 5-10 lat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      modifiedDate: '2022-03-16T14:43:15Z',
      category: 'FOR_CHILDREN',
      location: {
        region: 'Mazowieckie',
        city: 'Warszawa',
      },
      phoneNumber: '48456789123',
      type: 'MATERIAL_AID',
    },
    {
      id: 23,
      userFirstName: 'Mariusz',
      title: 'Darmowy transport na granicę i z granicy z Ostrowa i okolic',
      description:
        'Darmowy transport z Ostrowa i okolic na granicę z Ukraniną i z granicy mam 4 miejsca mam foteliki dla dzieci najleipiej w weekend',
      modifiedDate: '2022-03-16T14:43:15Z',
      origin: {
        region: 'Pomorskie',
        city: 'Gdańsk',
      },
      destination: {
        region: 'Mazowieckie',
        city: 'Warszawa',
      },
      capacity: 10,
      transportDate: '2022-03-16',
      phoneNumber: '48789123456',
      type: 'TRANSPORT',
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
      phoneNumber: '48891234567',
      type: 'ACCOMMODATION',
    },
  ],
  totalElements: 3,
  totalPages: 1,
};
