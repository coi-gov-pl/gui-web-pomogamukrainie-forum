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
    return value.toLowerCase().replace(/(?:^|[\s-/])\w/g, (match) => match.toUpperCase());
  }
}
