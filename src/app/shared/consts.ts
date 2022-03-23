import { Prefix, Option } from './models';
import { LanguageCode, LanguageNames } from '@app/core/translations';
import { AccommodationOffer, AccommodationOfferDefinitionDTO } from '@app/core/api';
import HostLanguageEnum = AccommodationOfferDefinitionDTO.HostLanguageEnum;

export const PREFIXES: Prefix[] = [
  {
    countryCode: LanguageCode.ru_RU,
    prefix: '+7',
  },
  {
    countryCode: LanguageCode.en_GB,
    prefix: '+44',
  },
  {
    countryCode: LanguageCode.pl_PL,
    prefix: '+8',
  },
  {
    countryCode: LanguageCode.uk_UA,
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

export const NON_DIGITS_REGEX = /[^0-9]+/g;
export const SPACES_REGEX = /\s/g;
export const LETTERS_ONLY_REGEX = /[^a-z]/g;
