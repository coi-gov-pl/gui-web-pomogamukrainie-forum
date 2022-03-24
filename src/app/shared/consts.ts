import { Prefix, Option } from './models';
import { CountryCodes, LanguageNames } from '@app/core/translations';
import { AccommodationOffer, AccommodationOfferDefinitionDTO } from '@app/core/api';
import HostLanguageEnum = AccommodationOfferDefinitionDTO.HostLanguageEnum;

export const PREFIXES: Prefix[] = [
  {
    countryCode: CountryCodes.RU,
    prefix: '+7',
  },
  {
    countryCode: CountryCodes.GB,
    prefix: '+44',
  },
  {
    countryCode: CountryCodes.PL,
    prefix: '+48',
  },
  {
    countryCode: CountryCodes.UA,
    prefix: '+380',
  },
];

export const LANGUAGES: Option[] = [
  { code: HostLanguageEnum.Pl, label: LanguageNames.POLISH },
  { code: HostLanguageEnum.Ua, label: LanguageNames.UKRAINIAN },
];

export const LENGTHOFSTAY: Option[] = [
  { code: AccommodationOffer.LengthOfStayEnum.Week1, label: '1 tydzień ' },
  { code: AccommodationOffer.LengthOfStayEnum.Week2, label: '2 tygodnie' },
  { code: AccommodationOffer.LengthOfStayEnum.Month1, label: '1 miesiąc ' },
  { code: AccommodationOffer.LengthOfStayEnum.Month2, label: '2 miesiące' },
  { code: AccommodationOffer.LengthOfStayEnum.Month3, label: '3 miesiące' },
  { code: AccommodationOffer.LengthOfStayEnum.Longer, label: 'dłużej' },
];

export const MATCH_NON_DIGITS = /[^0-9]+/g;
export const MATCH_SPACES = /\s/g;
export const MATCH_DIGITS = /[0-9]/g;
