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

  options: Location[] = [];

  selectedOption?: Location;

  ngOnInit(): void {
    this.myControl.valueChanges
      .pipe(
        tap(console.log),
        filter((value) => typeof value === 'string' && value.length >= 2),
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

  displayOption(location?: Location) {
    if (!location) {
      return '';
    }

    return toTitleCase(location.city) + ', ' + location.voivodeship;

    function toTitleCase(value: string) {
      return value.toLowerCase().replace(/(?:^|[\s-/])\w/g, (match) => match.toUpperCase());
    }
  }

  onSelected(option: Location) {
    this.selectedOption = option;
  }

  getData(query: string) {
    return this.http.get<{
      cities: Location[];
    }>('http://192.168.1.36:8080/api/dictionaries/city', {
      params: {
        query,
      },
    });
  }
}
