import { MaterialAidOfferDefinitionDTO, MaterialAidOffer, OffersMaterialAidOffer } from '@app/core/api';

export const materialAidOffer = (body: MaterialAidOfferDefinitionDTO): MaterialAidOffer => {
  return {
    ...body,
    id: 1,
    userFirstName: 'example',
    modifiedDate: new Date().toISOString(),
    type: 'MATERIAL_AID',
  };
};

export const materialAidList: OffersMaterialAidOffer = {
  content: [
    {
      id: 5,
      userFirstName: 'Krystyna',
      title: 'Oddam materac dwuosobowy',
      description: 'Materac w bardzo dobrym stanie, do odbioru w Gdańsku',
      modifiedDate: '2022-03-14T10:36:12Z',
      category: 'HOUSEHOLD_GOODS',
      location: { region: 'Pomorskie', city: 'Gdańsk' },
      phoneNumber: '48123456789',
      type: 'MATERIAL_AID',
    },
    {
      id: 7,
      userFirstName: 'Maria',
      title: 'Mam do oddania zabawki dziecięce',
      description: 'worek zabawek do oddania, wszystkie w dobrym stanie, dla dziecka w wieku 5-10 lat',
      modifiedDate: '2022-03-14T10:36:12Z',
      category: 'FOR_CHILDREN',
      location: { region: 'Mazowieckie', city: 'Warszawa' },
      phoneNumber: '48456789123',
      type: 'MATERIAL_AID',
    },
    {
      id: 17,
      userFirstName: 'Krystyna',
      title: 'Oddam materac dwuosobowy',
      description: 'Materac w bardzo dobrym stanie, do odbioru w Gdańsku',
      modifiedDate: '2022-03-16T14:43:15Z',
      category: 'HOUSEHOLD_GOODS',
      location: { region: 'Pomorskie', city: 'Gdańsk' },
      phoneNumber: '48789123456',
      type: 'MATERIAL_AID',
    },
    {
      id: 19,
      userFirstName: 'Maria',
      title: 'Mam do oddania zabawki dziecięce',
      description: 'worek zabawek do oddania, wszystkie w dobrym stanie, dla dziecka w wieku 5-10 lat',
      modifiedDate: '2022-03-16T14:43:15Z',
      category: 'FOR_CHILDREN',
      location: { region: 'Mazowieckie', city: 'Warszawa' },
      phoneNumber: '48891234567',
      type: 'MATERIAL_AID',
    },
  ],
  totalElements: 4,
  totalPages: 1,
};
