import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, Observable, of, startWith, switchMap, tap } from 'rxjs';

type Location = {
  city: string;
  voivodeship: string;
};

@Component({
  selector: 'app-cities-search',
  templateUrl: './cities-search.component.html',
  styleUrls: ['./cities-search.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: CitiesSearchComponent,
    },
  ],
})
export class CitiesSearchComponent implements OnInit, ControlValueAccessor {
  //FIXME: validator
  constructor(private http: HttpClient) {}

  options: Location[] = [];

  selectedOption?: Location;

  touched = false;

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

  onChange: (value: Location) => void = () => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onTouched = () => {};

  writeValue(obj: any): void {
    this.selectedOption = obj;
  }

  onSelected(option: Location) {
    this.markAsTouched();
    this.selectedOption = option;
    this.onChange(option);
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
