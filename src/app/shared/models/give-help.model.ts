export interface Offer {
  title: string;
  description: string;
  phoneNumber?: string;
}

export interface Prefix {
  countryCode: string;
  prefix: number;
}

export interface TempTransportOfferDefinitionDTO {
  title: string;
  description: string;
  origin: Location;
  destination: Location;
  capacity: number;
  transportDate: string;
  phoneNumber?: string;
}
