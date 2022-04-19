import { LawOfferDefinitionDTO, OffersLawOffer, LawOffer } from '@app/core/api';

export const lawOffer = (body: LawOfferDefinitionDTO): LawOffer => {
  return {
    ...body,
    id: 1,
    userFirstName: 'example',
    modifiedDate: new Date().toISOString(),
    type: LawOffer.TypeEnum.Law,
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
      helpMode: [
        LawOffer.HelpModeEnum.Stationary,
        LawOffer.HelpModeEnum.WithAccess,
        LawOffer.HelpModeEnum.Online,
        LawOffer.HelpModeEnum.ByEmail,
        LawOffer.HelpModeEnum.ByPhone,
      ],
      helpKind: [
        LawOffer.HelpKindEnum.LabourLaw,
        LawOffer.HelpKindEnum.ImmigrationLaw,
        LawOffer.HelpKindEnum.FamilyLaw,
        LawOffer.HelpKindEnum.TaxLaw,
        LawOffer.HelpKindEnum.CivilLaw,
        LawOffer.HelpKindEnum.Other,
      ],
      language: [LawOffer.LanguageEnum.Pl, LawOffer.LanguageEnum.Ua],
      phoneCountryCode: '48',
      phoneNumber: '48123456789',
      type: LawOffer.TypeEnum.Law,
    },
  ],
  totalElements: 1,
  totalPages: 1,
};
