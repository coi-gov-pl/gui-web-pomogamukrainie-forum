import * as pl from '@app/core/translations/pl_PL';

type PL_KEYS = keyof typeof pl.default;

export enum ErrorCode {
  required = 'required',
  pattern = 'pattern',
  titleIllegalCharacters = 'titleIllegalCharacters',
  descriptionIllegalCharacters = 'descriptionIllegalCharacters',
  emailIllegalCharacters = 'emailIllegalCharacters',
  phoneRequiredCharacters = 'phoneRequiredCharacters',
  min = 'min',
  max = 'max',
  matDatepickerParse = 'matDatepickerParse',
  matDatepickerMin = 'matDatepickerMin',
  locationIllegalCharacters = 'locationIllegalCharacters',
}

export const ErrorTranslationKey: { [P in keyof typeof ErrorCode]: PL_KEYS } = {
  required: 'ERROR_REQUIRED',
  pattern: 'ERROR_PATTERN',
  titleIllegalCharacters: 'ERROR_TITLE_ILLEGAL_CHARACTERS',
  descriptionIllegalCharacters: 'ERROR_DESCRIPTION_ILLEGAL_CHARACTERS',
  emailIllegalCharacters: 'EMAIL_ILLEGAL_CHARACTERS',
  phoneRequiredCharacters: 'PHONE_REQUIRED_CHARACTERS',
  min: 'ERROR_MIN_VALUE',
  max: 'ERROR_MAX_VALUE',
  matDatepickerParse: 'ERROR_INVALID_DATE',
  matDatepickerMin: 'ERROR_MIN_DATE',
  locationIllegalCharacters: 'ERROR_LOCATION_INVALID',
};
