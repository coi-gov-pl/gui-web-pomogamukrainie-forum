import {Component} from '@angular/core';
import {Offer} from "../offer-form/offer-form.component";

interface Accommodation {
  location: string;
  guests: number | undefined;
  lengthOfStay: string | undefined;
  hostLanguages: string[];
}
@Component({
  selector: 'app-accommodation-form',
  templateUrl: './accommodation-form.component.html',
  styleUrls: ['./accommodation-form.component.scss']
})
export class AccommodationFormComponent {
  data: Accommodation = {
    location: '',
    guests: undefined,
    lengthOfStay: undefined,
    hostLanguages: []
  }
  languages = [
    {code: 'pl', label: 'Polski'},
    {code: 'ua', label: 'Ukraiński'},
    {code: 'en', label: 'Angielski'},
  ]
  lengthsOfSay = [
    {code: '1t', label: '1 tydzień '},
    {code: '2t', label: '2 tygodnie'},
    {code: '1m', label: '1 miesiąc '},
    {code: '2m', label: '2 miesiące'},
    {code: 'o', label: 'dłużej'},
  ]

  handleSubmit(offer: Offer) {
    console.log({
      ...offer,
      ...this.data,
    })
  }

}
