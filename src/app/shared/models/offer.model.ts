export interface Prefix {
  countryCode: string | undefined;
  prefix: string | undefined;
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
