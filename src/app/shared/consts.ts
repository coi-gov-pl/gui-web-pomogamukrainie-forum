import {
  AccommodationOffer,
  AccommodationOfferDefinitionDTO,
  JobOfferDefinitionDTO,
  LawOfferDefinitionDTO,
} from '@app/core/api';
import { LanguageCode, LanguageNames, LengthOfStayLabels } from '@app/core/translations';
import { Option, Prefix } from './models';
import HostLanguageEnum = AccommodationOfferDefinitionDTO.HostLanguageEnum;
import JobLanguageEnum = JobOfferDefinitionDTO.LanguageEnum;
import LawLanguageEnum = LawOfferDefinitionDTO.LanguageEnum;

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
  { code: HostLanguageEnum.Pl, label: LanguageNames.POLISH },
  { code: HostLanguageEnum.Ua, label: LanguageNames.UKRAINIAN },
  { code: HostLanguageEnum.Ru, label: LanguageNames.RUSSIAN },
  { code: HostLanguageEnum.En, label: LanguageNames.ENGLISH },
];

export const LAW_LANGUAGES: Option[] = [
  { code: LawLanguageEnum.Pl, label: LanguageNames.POLISH },
  { code: LawLanguageEnum.Ua, label: LanguageNames.UKRAINIAN },
  { code: LawLanguageEnum.Ru, label: LanguageNames.RUSSIAN },
  { code: LawLanguageEnum.En, label: LanguageNames.ENGLISH },
];

export const JOB_LANGUAGES: Option[] = [
  { code: JobLanguageEnum.Pl, label: LanguageNames.POLISH },
  { code: JobLanguageEnum.Ua, label: LanguageNames.UKRAINIAN },
  { code: JobLanguageEnum.Ru, label: LanguageNames.RUSSIAN },
  { code: JobLanguageEnum.En, label: LanguageNames.ENGLISH },
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
