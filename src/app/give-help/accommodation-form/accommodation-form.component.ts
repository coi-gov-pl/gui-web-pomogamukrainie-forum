import { Component, ViewChild, Input, ElementRef } from '@angular/core';
import { defaults } from '@app/shared/utils';
import { PREFIXES, LANGUAGES, LENGTHOFSTAY } from '@app/shared/consts';
import { AccommodationOfferDefinitionDTO, AccommodationsResourceService } from '@app/core/api';
import { CorePath, ALERT_TYPES } from '@app/shared/models';
import { SnackbarService } from '@app/shared/services';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { NON_DIGITS_REGEX, SPACES_REGEX } from '@app/shared/consts';

@Component({
  selector: 'app-accommodation-form',
  templateUrl: './accommodation-form.component.html',
  styleUrls: ['./accommodation-form.component.scss'],
})
export class AccommodationFormComponent {
  phonePrefix: string = '48';
  phoneNumber: string = '';
  LENGTHOFSTAY = LENGTHOFSTAY;
  LANGUAGES = LANGUAGES;
  PREFIXES = PREFIXES;
  data = defaults<AccommodationOfferDefinitionDTO>({
    hostLanguage: [],
  });
  loading: boolean = false;
  @ViewChild('phoneInput') phoneInput!: ElementRef;

  constructor(
    private accommodationsResourceService: AccommodationsResourceService,
    private router: Router,
    private snackbarService: SnackbarService
  ) {}

  onPrefixNumberChange() {
    this.preparePhoneNumber();
  }

  onPhoneNumberChange($event: Event) {
    let val = ($event.target as HTMLInputElement).value;
    if (val) {
      val = val.replace(NON_DIGITS_REGEX, '').replace(SPACES_REGEX, '');
      this.phoneInput.nativeElement.value = val;
      this.data.phoneNumber = val;
      this.preparePhoneNumber();
    }
  }

  preparePhoneNumber() {
    this.data.phoneNumber = this.phonePrefix + this.phoneNumber;
  }

  submitOffer(): void {
    this.loading = true;
    this.accommodationsResourceService
      .createAccommodations(this.data)
      .pipe(take(1))
      .subscribe(
        (response) => this.redirectOnSuccess(),
        (error) => this.snackbarService.openSnack(error.message, ALERT_TYPES.ERROR)
      )
      .add(() => (this.loading = false));
  }

  redirectOnSuccess() {
    this.router.navigate([CorePath.MyAccount]).then((navigated: boolean) => {
      if (navigated) {
        this.snackbarService.openSnackAlert(ALERT_TYPES.OFFER_SUCCESS);
      }
    });
  }
}
