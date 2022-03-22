import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, switchMap, tap } from 'rxjs';
import { displayLocationOption, Location } from './display-location-option';
import { CityLookupResourceService } from '@app/core/api';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';

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
  constructor(private cityLookupResourceService: CityLookupResourceService) {}

  @Input() placeholder = '';
  @Input() label = '';
  @Input() required: boolean = false;
  @Input() isRegionPicked: boolean = false;

  @ViewChild('autoCompleteInput', { read: MatAutocompleteTrigger }) autoComplete?: MatAutocompleteTrigger;

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
        this.options = data.cities ?? [];
      });
  }

  displayOption(location?: Location) {
    return displayLocationOption(location);
  }

  onChange: (value: Location | undefined) => void = () => {};

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

  clearValue(): void {
    this.selectedOption = undefined;
    this.formControl.setValue('');
    this.onChange(undefined);

    // This doesn't work without a setTimeout.
    // Unfortunately, with `setTimeout` there's sometimes
    // small flickering. Better solutions welcome.
    setTimeout(() => {
      this.autoComplete?.closePanel();
    });
  }

  onSelected(option: Location) {
    this.markAsTouched();
    this.selectedOption = option;
    this.onChange(option);
  }

  getData(query: string) {
    return this.cityLookupResourceService.getCitiesCityLookup(query);
  }

  onLocationInput($event: Event) {
    let val = ($event.target as HTMLInputElement).value;
    val = val.replace(/[0-9]/g, '');
    this.formControl.patchValue(val);
  }
}
