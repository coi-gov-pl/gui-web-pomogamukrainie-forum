import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, Observable, of, switchMap, take, tap } from 'rxjs';
import { displayLocationOption, Location } from './display-location-option';
import { CityLookupDto, CityLookupResourceService } from '@app/core/api';
import { HttpClient, HttpParams } from '@angular/common/http';
import PlacesServiceStatus = google.maps.places.PlacesServiceStatus;

interface TranslatedCitiesFromGoogle {
  candidates: [
    {
      formatted_address: string;
      name: string;
    }
  ];
  status: PlacesServiceStatus;
}

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
  constructor(private cityLookupResourceService: CityLookupResourceService, private http: HttpClient) {}

  @Input() placeholder = '';
  @Input() label = '';

  options$: Observable<Location[]> | undefined;
  selectedOption?: Location;
  touched = false;
  formControl = new FormControl();

  private readonly queryMinLength = 2;

  ngOnInit(): void {
    this.options$ = this.formControl.valueChanges.pipe(
      filter((value) => typeof value === 'string' && value.length >= this.queryMinLength),
      distinctUntilChanged(),
      debounceTime(400),
      switchMap((value) => this.getData(value)),
      map((data) => data.cities || []),
      tap((cities: CityLookupDto[]) => this.translateCities(cities, this.formControl.value))
    );
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
    return this.cityLookupResourceService.getCitiesCityLookup(query);
  }

  private translateCities(cities: CityLookupDto[], value: string): void {
    const params = new HttpParams();
    params.append('fields', 'formatted_address');
    params.append('fields', 'name');
    params.append('input', value);
    params.append('inputtype', 'textquery');
    params.append('key', '');

    this.http
      .get<TranslatedCitiesFromGoogle>('https://maps.googleapis.com/maps/api/place/findplacefromtext/json', { params })
      .pipe(take(1))
      .subscribe((translatedCities) => {
        this.options$ = of(
          cities.map((city, i) => ({ ...city, cityTranslated: translatedCities.candidates[i].name })) as Location[]
        );
      });
  }
}
