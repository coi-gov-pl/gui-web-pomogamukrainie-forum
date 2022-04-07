import { Prefix, Option } from './models';
import { LanguageCode, LanguageNames, LengthOfStayLabels } from '@app/core/translations';
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
    prefix: '+48',
  },
  {
    countryCode: LanguageCode.uk_UA,
    prefix: '+380',
  },
];

export const LANGUAGES: Option[] = [
  { code: HostLanguageEnum.Pl, label: LanguageNames.POLISH },
  { code: HostLanguageEnum.Ua, label: LanguageNames.UKRAINIAN },
  { code: HostLanguageEnum.Ru, label: LanguageNames.RUSSIAN },
  { code: HostLanguageEnum.En, label: LanguageNames.ENGLISH },
];

export const LENGTH_OF_STAY: Option[] = [
  { code: AccommodationOffer.LengthOfStayEnum.Week1, label: LengthOfStayLabels.WEEK_1 },
  { code: AccommodationOffer.LengthOfStayEnum.Week2, label: LengthOfStayLabels.WEEK_2 },
  { code: AccommodationOffer.LengthOfStayEnum.Month1, label: LengthOfStayLabels.MONTH_1 },
  { code: AccommodationOffer.LengthOfStayEnum.Month2, label: LengthOfStayLabels.MONTH_2 },
  { code: AccommodationOffer.LengthOfStayEnum.Month3, label: LengthOfStayLabels.MONTH_3 },
  { code: AccommodationOffer.LengthOfStayEnum.Longer, label: LengthOfStayLabels.LONGER },
];

export const MATCH_NON_DIGITS = /[^0-9]+/g;
export const MATCH_SPACES = /\s/g;
export const MATCH_DIGITS = /[0-9]/g;

export const DIALOG_CANCEL_OFFER_CONFIG = {
  hasBackdrop: true,
  width: '100%',
  maxHeight: '450px',
  maxWidth: '480px',
  disableClose: false,
  autoFocus: false,
  data: { headerText: '' },
};
