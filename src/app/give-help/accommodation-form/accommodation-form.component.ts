import { Component } from '@angular/core';
import { defaults } from '@app/shared/utils';
import { AccommodationOfferDefinitionDTO } from '../../core/api/model/accommodationOfferDefinitionDTO';
import { PREFIXES, LANGUAGES, LENGTHOFSTAY } from '@app/shared/consts';
import { AccommodationsResourceService } from '@app/core/api';
import { OFFER_SENT_ALERT } from '@app/shared/consts';
import { CorePath } from '@app/shared/models/core-path.enum';
import { SnackbarService } from '@app/shared/services/snackbar.service';
import { ALERT_TYPES } from '@app/shared/models/temporary-models';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';
// Waiting for TransportOfferDefinitionDTO receive a phoneNumber prop
interface AccommodationOfferDefinition extends AccommodationOfferDefinitionDTO {
  phoneNumber?: string;
}
import { AccommodationOffer } from '@app/core/api';

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
  OFFER_SENT_ALERT = OFFER_SENT_ALERT;
  data = defaults<AccommodationOfferDefinition>({
    hostLanguage: [],
  });
  loading: boolean = false;
  constructor(
    private accommodationsResourceService: AccommodationsResourceService,
    private router: Router,
    private snackbarService: SnackbarService
  ) {}

  onPhoneNumberChange(): void {
    this.data.phoneNumber = this.phonePrefix + this.phoneNumber;
  }

  submitOffer(): void {
    this.loading = true;
    this.accommodationsResourceService
      .createAccommodations(this.data)
      .pipe(take(1))
      .subscribe(
        (response) => {
          this.router.navigate([CorePath.MyAccount]).then((navigated: boolean) => {
            if (navigated) {
              this.snackbarService.openSnackAlert();
            }
          });
        },
        (error) => this.snackbarService.openSnack(error.message, ALERT_TYPES.ERROR)
      )
      .add(() => (this.loading = false));
  }
}
