import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, Observable, switchMap, take } from 'rxjs';
import { Location } from './display-location-option';
import { CityLookupResourceService } from '@app/core/api';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AutocompletePrediction } from '@app/shared/components/cities-search/temp-google.interfaces';
import { GoogleLanguageCode } from '@app/core/translations';

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
  private readonly api_key = '';
  constructor(private cityLookupResourceService: CityLookupResourceService, private http: HttpClient) {}

  @Input() placeholder = '';
  @Input() label = '';

  predictions$: Observable<AutocompletePrediction[]> | undefined;
  selectedOption?: Location;
  touched = false;
  formControl = new FormControl();
  addressComponents: any[] = [];

  private readonly queryMinLength = 2;

  ngOnInit(): void {
    this.predictions$ = this.formControl.valueChanges.pipe(
      filter((value) => typeof value === 'string' && value.length >= this.queryMinLength),
      distinctUntilChanged(),
      debounceTime(400),
      switchMap((value) => this.getCities(value, GoogleLanguageCode.uk_UA)),
      map((data) => data || [])
    );
  }

  displayOption(location: AutocompletePrediction) {
    if (location?.place_id) {
      this.getCityDetails(location.place_id);
    }

    return location?.structured_formatting.main_text ?? '';
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
    return this.cityLookupResourceService.getCitiesCityLookup(query);
  }

  getCities(value: string, language: GoogleLanguageCode): Observable<AutocompletePrediction[]> {
    const params = new HttpParams({
      fromString: `input=${value}&fields&types=%28cities%29&key=${this.api_key}&components=country:pl&language=${language}`,
    });

    return this.http
      .get<{ predictions: AutocompletePrediction[] }>('https://maps.googleapis.com/maps/api/place/autocomplete/json', {
        params,
      })
      .pipe(
        map((value) => value.predictions),
        take(1)
      );
  }

  private getCityDetails(place_id: string) {
    const params = new HttpParams({
      fromString: `place_id=${place_id}&key=${this.api_key}`,
    });

    this.http
      .get<any>('https://maps.googleapis.com/maps/api/place/details/json', {
        params,
      })
      .pipe(take(1))
      .subscribe((place) => (this.addressComponents = place.result.address_components));
  }
}
