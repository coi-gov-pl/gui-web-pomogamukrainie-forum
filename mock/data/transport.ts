import { TransportOfferDefinitionDTO, OffersVMTransportOfferVM, TransportOfferVM } from '@app/core/api';

export const transportOffer = (body: TransportOfferDefinitionDTO): TransportOfferVM => {
  return {
    ...body,
    id: 1,
    userFirstName: 'example',
    modifiedDate: new Date().toISOString(),
    type: 'TRANSPORT',
  };
};

export const transportList: OffersVMTransportOfferVM = {
  content: [
    {
      id: 9,
      userFirstName: 'Marta',
      title: 'Transport busem 8osobowy',
      description:
        'Witam, mam busa 8 osobowego jestem wstanie pomóż w transporcie. Mogę też przewieź rzeczy pod granice.',
      modifiedDate: '2022-03-14T10:36:12Z',
      origin: { region: 'woj. mazowieckie, pow. Warszawa, gm. Warszawa', city: 'Warszawa' },
      destination: { region: 'woj. mazowieckie, pow. Warszawa, gm. Warszawa', city: 'Warszawa' },
      capacity: 11,
      transportDate: '2022-03-14',
      type: 'TRANSPORT',
    },
    {
      id: 11,
      userFirstName: 'Mariusz',
      title: 'Darmowy transport na granicę i z granicy z Ostrowa i okolic',
      description:
        'Darmowy transport z Ostrowa i okolic na granicę z Ukraniną i z granicy mam 4 miejsca mam foteliki dla dzieci najleipiej w weekend',
      modifiedDate: '2022-03-14T10:36:12Z',
      origin: { region: 'woj. warmińsko-mazurskie, pow. szczycieński, gm. Szczytno', city: 'Szczytno' },
      destination: { region: 'woj. pomorskie, pow. Gdańsk, gm. Gdańsk', city: 'Gdańsk' },
      capacity: 10,
      transportDate: '2022-03-14',
      phoneCountryCode: '48',
      phoneNumber: '456789123',
      type: 'TRANSPORT',
    },
    {
      id: 21,
      userFirstName: 'Marta',
      title: 'Transport busem 8osobowy',
      description:
        'Witam, mam busa 8 osobowego jestem wstanie pomóż w transporcie. Mogę też przewieź rzeczy pod granice.',
      modifiedDate: '2022-03-16T14:43:15Z',
      origin: { region: 'Pomorskie', city: 'Gdynia' },
      destination: { region: 'Pomorskie', city: 'Gdynia' },
      capacity: 11,
      transportDate: '2022-03-16',
      phoneCountryCode: '48',
      phoneNumber: '789123456',
      type: 'TRANSPORT',
    },
    {
      id: 23,
      userFirstName: 'Mariusz',
      title: 'Darmowy transport na granicę i z granicy z Ostrowa i okolic',
      description:
        'Darmowy transport z Ostrowa i okolic na granicę z Ukraniną i z granicy mam 4 miejsca mam foteliki dla dzieci najleipiej w weekend',
      modifiedDate: '2022-03-16T14:43:15Z',
      origin: { region: 'Pomorskie', city: 'Gdańsk' },
      destination: { region: 'Mazowieckie', city: 'Warszawa' },
      capacity: 10,
      transportDate: '2022-03-16',
      phoneCountryCode: '48',
      phoneNumber: '891234567',
      type: 'TRANSPORT',
    },
    {
      id: 234,
      userFirstName: 'Stefan',
      title: 'Darmowy transport na granicę i z granicy z Warszawy i okolic',
      description:
        'Darmowy transport z Warszawy i okolic na granicę z Ukraniną i z granicy mam 4 miejsca mam foteliki dla dzieci najleipiej w weekend',
      modifiedDate: '2022-03-16T14:43:15Z',
      origin: {
        region: 'Pomorskie',
        city: 'Gdańsk',
      },
      destination: {
        region: 'Mazowieckie',
        city: 'Warszawa',
      },
      capacity: 6,
      transportDate: '2022-03-17',
      phoneCountryCode: '48',
      phoneNumber: '789123457',
      type: 'TRANSPORT',
    },
    {
      id: 2345,
      userFirstName: 'Anna',
      title: 'Darmowy transport na granicę i z granicy z Przemyśla i okolic',
      description:
        'Darmowy transport z Przemyśla i okolic na granicę z Ukraniną i z granicy mam 4 miejsca mam foteliki dla dzieci najleipiej w weekend',
      modifiedDate: '2022-03-16T14:43:15Z',
      origin: {
        region: 'Pomorskie',
        city: 'Gdańsk',
      },
      destination: {
        region: 'Podkarpackie',
        city: 'Warszawa',
      },
      capacity: 5,
      transportDate: '2022-03-18',
      phoneNumber: '48789123458',
      type: 'TRANSPORT',
    },
  ],
  totalElements: 6,
  totalPages: 2,
};
