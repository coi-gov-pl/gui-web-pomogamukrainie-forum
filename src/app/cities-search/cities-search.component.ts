import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, Observable, of, startWith, switchMap, tap } from 'rxjs';

type Location = {
  city: string;
  voivodeship: string;
};

@Component({
  selector: 'app-cities-search',
  templateUrl: './cities-search.component.html',
  styleUrls: ['./cities-search.component.scss'],
})
export class CitiesSearchComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.myControl.valueChanges
      .pipe(
        tap(console.log),
        filter((value) => typeof value === 'string' && value.length > 1),
        distinctUntilChanged(),
        debounceTime(400),
        tap(() => {
          this.options = [];
        }),
        switchMap((value) => this.getData(value))
      )
      .subscribe((data) => {
        this.options = data.cities;
      });
  }

  myControl = new FormControl();

  options: Location[] = [];

  selectedOption: Location | undefined;

  displayOption(location?: Location) {
    if (!location) {
      return '';
    }

    return location.city + ', ' + location.voivodeship;
  }

  getData(query: string) {
    return this.http.get<{
      cities: Location[];
    }>('http://localhost:8080/api/dictionaries/city', {
      params: {
        query,
      },
    });
  }
}
