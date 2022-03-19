import { Component } from '@angular/core';
import { defaults } from '@app/shared/utils';
import { TransportOfferDefinitionDTO } from '@app/core/api/model/transportOfferDefinitionDTO';
import { TransportResourceService } from '../../core/api/api/transportResource.service';
import { PREFIXES } from '@app/shared/consts';
import { CorePath } from '@app/shared/models/core-path.model';
import { SnackbarService } from '@app/shared/services/snackbar.service';
import { ALERT_TYPES } from '@app/shared/models';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';
// Waiting for TransportOfferDefinitionDTO receive a phoneNumber prop
interface TransportOfferDefinition extends TransportOfferDefinitionDTO {
  phoneNumber?: string;
}

@Component({
  selector: 'app-transport-form',
  templateUrl: './transport-form.component.html',
  styleUrls: ['./transport-form.component.scss'],
})
export class TransportFormComponent {
  minDate: Date = new Date();
  PREFIXES = PREFIXES;
  phonePrefix: string = '48';
  phoneNumber: string = '';
  data = defaults<TransportOfferDefinition>();
  loading: boolean = false;

  constructor(
    private transportResourceService: TransportResourceService,
    private router: Router,
    private snackbarService: SnackbarService
  ) {}

  onPhoneNumberChange(): void {
    this.data.phoneNumber = this.phonePrefix + this.phoneNumber;
  }

  submitOffer(): void {
    this.transportResourceService
      .createTransport(this.data)
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
