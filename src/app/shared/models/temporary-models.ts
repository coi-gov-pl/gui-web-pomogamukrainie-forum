export interface Prefix {
  countryCode: string;
  prefix: string;
}

export interface Accommodation {
  location: string;
  guests: number | undefined;
  lengthOfStay: string | undefined;
  hostLanguages: string[];
}

export interface Option {
  code: string;
  label: string;
}

export class Alert {
  header: string | undefined;
  content: string | undefined;
}

export enum ALERT_TYPES {
  CONFIRM = 'CONFIRM',
  ERROR = 'ERROR',
  WARNING = 'WARNING',
}
