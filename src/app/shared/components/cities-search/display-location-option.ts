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
    // DO NOT replace it with `value[0].toUpperCase()` etc. as that may not
    // select the whole glyph, unlike unicode regex replacement.
    return value.toLowerCase().replace(/^./u, (letter) => letter.toUpperCase());
  }
}
