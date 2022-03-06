import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, Observable, of, startWith, switchMap, tap } from 'rxjs';
import { displayLocationOption, Location } from './display-location-option';

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
  constructor(private http: HttpClient) {}

  @Input() placeholder = '';
  @Input() label = '';

  options: Location[] = [];
  selectedOption?: Location;
  touched = false;
  formControl = new FormControl();

  private readonly queryMinLength = 2;

  ngOnInit(): void {
    this.formControl.valueChanges
      .pipe(
        filter((value) => typeof value === 'string' && value.length >= this.queryMinLength),
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

  displayOption(location?: Location) {
    return displayLocationOption(location);
  }

  onChange: (value: Location) => void = () => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  onTouched = () => {};

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  writeValue(location: Location): void {
    this.selectedOption = location;
  }

  onSelected(option: Location) {
    this.markAsTouched();
    this.selectedOption = option;
    this.onChange(option);
  }

  getData(query: string) {
    return this.http.get<{
      cities: Location[];
    }>('/api/dictionaries/city', {
      params: {
        query,
      },
    });
  }
}
