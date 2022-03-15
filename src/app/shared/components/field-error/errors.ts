export enum ErrorCode {
  required = 'required',
  pattern = 'pattern',
  titleIllegalCharacters = 'titleIllegalCharacters',
  descriptionIllegalCharacters = 'descriptionIllegalCharacters',
}

export const ErrorTranslationKey: { [key: string]: string } = {
  required: 'ERROR_REQUIRED',
  pattern: 'ERROR_PATTERN',
  titleIllegalCharacters: 'ERROR_TITLE_ILLEGAL_CHARACTERS',
  descriptionIllegalCharacters: 'ERROR_DESCRIPTION_ILLEGAL_CHARACTERS',
};
