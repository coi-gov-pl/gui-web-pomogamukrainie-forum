import { Component, ElementRef, ViewChild } from '@angular/core';
import { defaults } from '@app/shared/utils';
import { TransportOfferDefinitionDTO, TransportResourceService } from '@app/core/api';
import { PREFIXES } from '@app/shared/consts';
import { SnackbarService } from '@app/shared/services/snackbar.service';
import { CorePath, ALERT_TYPES } from '@app/shared/models';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MATCH_NON_DIGITS, MATCH_SPACES } from '@app/shared/consts';

@Component({
  selector: 'app-transport-form',
  templateUrl: './transport-form.component.html',
  styleUrls: ['./transport-form.component.scss'],
})
export class TransportFormComponent {
  minDate: Date = new Date();
  PREFIXES = PREFIXES;
  phonePrefix: string = 'PL';
  phoneNumber: string = '';
  data = defaults<TransportOfferDefinitionDTO>();
  loading: boolean = false;
  @ViewChild('phoneInput') phoneInput!: ElementRef<HTMLInputElement>;

  constructor(
    private transportResourceService: TransportResourceService,
    private router: Router,
    private snackbarService: SnackbarService
  ) {}

  onPhoneNumberChange($event: Event) {
    let val = ($event.target as HTMLInputElement).value;
    val = val.replace(MATCH_NON_DIGITS, '').replace(MATCH_SPACES, '');
    this.phoneInput.nativeElement.value = val;
    this.phoneNumber = val;
  }

  preparePhoneNumber() {
    this.data.phoneNumber = this.phonePrefix + this.phoneNumber;
  }

  submitOffer(): void {
    this.loading = true;
    this.phoneNumber ? this.preparePhoneNumber() : null;
    this.transportResourceService
      .createTransport(this.data)
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
