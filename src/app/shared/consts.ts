import { Prefix, Option } from './models/temporary-models';
import { LanguageCode, LanguageNames } from '@app/core/translations';

export const PREFIXES: Prefix[] = [
  {
    countryCode: LanguageCode.ru_RU,
    prefix: '7',
  },
  {
    countryCode: LanguageCode.en_GB,
    prefix: '44',
  },
  {
    countryCode: LanguageCode.pl_PL,
    prefix: '48',
  },
  {
    countryCode: LanguageCode.uk_UA,
    prefix: '380',
  },
];

export const LANGUAGES: Option[] = [
  { code: LanguageCode.pl_PL, label: LanguageNames.POLISH },
  { code: LanguageCode.uk_UA, label: LanguageNames.UKRAINIAN },
  { code: LanguageCode.en_GB, label: LanguageNames.ENGLISH },
  { code: LanguageCode.ru_RU, label: LanguageNames.RUSSIAN },
];

export const LENGTHOFSTAY: Option[] = [
  { code: '1t', label: '1 tydzień ' },
  { code: '2t', label: '2 tygodnie' },
  { code: '1m', label: '1 miesiąc ' },
  { code: '2m', label: '2 miesiące' },
  { code: 'o', label: 'dłużej' },
];
