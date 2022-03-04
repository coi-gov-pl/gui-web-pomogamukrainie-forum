import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, startWith, switchMap, tap } from 'rxjs';

type Location = {
  city: string;
  voivodeship: string;
};

@Component({
  selector: 'app-cities-search',
  templateUrl: './cities-search.component.html',
  styleUrls: ['./cities-search.component.scss'],
})
export class CitiesSearchComponent {
  constructor(private http: HttpClient) {
    this.myControl.valueChanges
      // .pipe(startWith(''), debounceTime(400), distinctUntilChanged())
      .subscribe((oooo) => {
        console.log(oooo);
        this.getData();
      });
  }

  myControl = new FormControl();

  options: string[] = [];

  getData() {
    this.http
      .get<{
        cities: Location[];
      }>('http://localhost:3001/api/dictionaries/cities')
      .subscribe((data) => {
        this.options = data.cities.map((location) => location.city + ', ' + location.voivodeship);
      });
  }
}
