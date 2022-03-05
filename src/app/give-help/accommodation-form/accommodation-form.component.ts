import { Component } from '@angular/core';
import { Offer } from '../offer-form/offer-form.component';
import { defaults } from '../../core/defaults';

interface Accommodation {
  location: string;
  guests: number | undefined;
  lengthOfStay: string | undefined;
  hostLanguages: string[];
}
interface Option {
  code: string;
  label: string;
}
@Component({
  selector: 'app-accommodation-form',
  templateUrl: './accommodation-form.component.html',
  styleUrls: ['./accommodation-form.component.scss'],
})
export class AccommodationFormComponent {
  data = defaults<Accommodation>({
    hostLanguages: [],
  });
  languages: Option[] = [
    { code: 'pl', label: 'Polski' },
    { code: 'ua', label: 'Ukraiński' },
    { code: 'en', label: 'Angielski' },
  ];
  lengthsOfSay: Option[] = [
    { code: '1t', label: '1 tydzień ' },
    { code: '2t', label: '2 tygodnie' },
    { code: '1m', label: '1 miesiąc ' },
    { code: '2m', label: '2 miesiące' },
    { code: 'o', label: 'dłużej' },
  ];

  handleSubmit(offer: Offer) {
    console.log({
      ...offer,
      ...this.data,
    });
  }
}
