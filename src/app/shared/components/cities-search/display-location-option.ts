import { Pipe, PipeTransform } from '@angular/core';

export type Location = {
  city: string;
  region: string;
};

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

  return toTitleCase(location.city) + ', ' + location.region;

  function toTitleCase(value: string) {
    // ^. - first character of the string
    // \s. - first character after whitespace
    // -. - first character after - (f.e. Kudowa-Zdroj)
    return value.toLowerCase().replace(/(^.|\s.|-.)([^-\s]*)/g, (_, m1, m2) => m1.toUpperCase() + m2);
  }
}
