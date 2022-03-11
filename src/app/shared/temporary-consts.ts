import { Prefix, Option } from './models/temporary-models';

export const PHONE_NUMBER_REGEX = /^\d{9}$/;

export const prefixes: Prefix[] = [
  {
    countryCode: 'pl_PL',
    prefix: '48',
  },
  {
    countryCode: 'uk_UA',
    prefix: '380',
  },
];

export const languages: Option[] = [
  { code: 'pl', label: 'Polski' },
  { code: 'ua', label: 'Ukraiński' },
  { code: 'en', label: 'Angielski' },
];

export const lengthsOfSay: Option[] = [
  { code: '1t', label: '1 tydzień ' },
  { code: '2t', label: '2 tygodnie' },
  { code: '1m', label: '1 miesiąc ' },
  { code: '2m', label: '2 miesiące' },
  { code: 'o', label: 'dłużej' },
];
