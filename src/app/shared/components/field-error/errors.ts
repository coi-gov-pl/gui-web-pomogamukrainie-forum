export enum ErrorCode {
  required = 'required',
  pattern = 'pattern',
  titleIllegalCharacters = 'titleIllegalCharacters',
  descriptionIllegalCharacters = 'descriptionIllegalCharacters',
  emailIllegalCharacters = 'emailIllegalCharacters',
  phoneIllegalCharacters = 'phoneIllegalCharacters',
}

export const ErrorTranslationKey: { [key: string]: string } = {
  required: 'ERROR_REQUIRED',
  pattern: 'ERROR_PATTERN',
  titleIllegalCharacters: 'ERROR_TITLE_ILLEGAL_CHARACTERS',
  descriptionIllegalCharacters: 'ERROR_DESCRIPTION_ILLEGAL_CHARACTERS',
  emailIllegalCharacters: 'EMAIL_ILLEGAL_CHARACTERS',
  phoneIllegalCharacters: 'PHONE_ILLEGAL_CHARACTERS',
};
