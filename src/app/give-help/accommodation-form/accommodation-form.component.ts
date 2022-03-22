import { Component, ViewChild, Input } from '@angular/core';
import { defaults } from '@app/shared/utils';
import { PREFIXES, LANGUAGES, LENGTHOFSTAY } from '@app/shared/consts';
import { AccommodationOfferDefinitionDTO, AccommodationsResourceService } from '@app/core/api';
import { CorePath, ALERT_TYPES } from '@app/shared/models';
import { SnackbarService } from '@app/shared/services';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';

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
  @ViewChild('phoneInput')
  phoneInput!: { nativeElement: { value: any } };
  constructor(
    private accommodationsResourceService: AccommodationsResourceService,
    private router: Router,
    private snackbarService: SnackbarService
  ) {}

  onPhoneNumberChange($event: any): void {
    let val = $event.target.value;
    val = val.replace(/[^0-9 ]+/g, '');
    this.phoneInput.nativeElement.value = val;
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
