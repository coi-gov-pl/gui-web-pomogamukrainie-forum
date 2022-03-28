import { Component } from '@angular/core';
import { defaults } from '@app/shared/utils';
import { LANGUAGES, LENGTH_OF_STAY } from '@app/shared/consts';
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
  LENGTH_OF_STAY = LENGTH_OF_STAY;
  LANGUAGES = LANGUAGES;
  data = defaults<AccommodationOfferDefinitionDTO>({
    hostLanguage: [],
  });
  loading: boolean = false;

  constructor(
    private accommodationsResourceService: AccommodationsResourceService,
    private router: Router,
    private snackbarService: SnackbarService
  ) {}

  submitOffer(): void {
    this.loading = true;

    this.accommodationsResourceService
      .createAccommodations(this.data)
      .pipe(take(1))
      .subscribe(() => this.redirectOnSuccess())
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
