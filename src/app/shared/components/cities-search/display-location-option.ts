import { Pipe, PipeTransform } from '@angular/core';
import { CityLookupDto } from '@app/core/api';

export interface Location extends CityLookupDto {
  cityTranslated?: string;
  regionTranslated?: string;
}

@Pipe({ name: 'displayLocationOption' })
export class DisplayLocationOptionPipe implements PipeTransform {
  transform(location: Location) {
    return displayLocationOption(location);
  }
}

export function displayLocationOption(location?: Location) {
  if (!location) {
    return '';
  }

  const cityTranslated = location.cityTranslated ? `(${location.cityTranslated})` : '';

  return `${toTitleCase(location.city)}, ${location.region}` + cityTranslated;

  function toTitleCase(value: string) {
    return value.toLowerCase().replace(/(?:^|[\s-/])\w/g, (match) => match.toUpperCase());
  }
}
