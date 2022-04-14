import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { defaults } from '@app/shared/utils';
import { TransportOfferDefinitionDTO, TransportResourceService } from '@app/core/api';
import { DIALOG_CANCEL_OFFER_CONFIG, PREFIXES } from '@app/shared/consts';
import { SnackbarService } from '@app/shared/services/snackbar.service';
import { CorePath, ALERT_TYPES, CANCEL_DIALOG_HEADERS } from '@app/shared/models';
import { take } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { MATCH_NON_DIGITS, MATCH_SPACES } from '@app/shared/consts';
import { ConfirmCancelDialogComponent } from '@app/shared/components';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-transport-form',
  templateUrl: './transport-form.component.html',
  styleUrls: ['./transport-form.component.scss'],
})
export class TransportFormComponent implements OnInit {
  minDate: Date = new Date();
  PREFIXES = PREFIXES;
  phonePrefix: string = '';
  phoneNumber: string = '';
  data = defaults<TransportOfferDefinitionDTO>();
  @ViewChild('phoneInput') phoneInput!: ElementRef<HTMLInputElement>;
  offerId?: number;
  constructor(
    private transportResourceService: TransportResourceService,
    private router: Router,
    private snackbarService: SnackbarService,
    private dialog: MatDialog,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.offerId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.isEditRoute) {
      this.transportResourceService.getTransport(this.offerId).subscribe((resp) => {
        this.phoneNumber = resp.phoneNumber || '';
        if (resp.phoneCountryCode) {
          this.findPrefix(resp.phoneCountryCode);
        }
        this.data = resp;
      });
      DIALOG_CANCEL_OFFER_CONFIG.data.headerText = CANCEL_DIALOG_HEADERS.CONFIRM_CANCEL_OFFER_EDIT;
    } else {
      DIALOG_CANCEL_OFFER_CONFIG.data.headerText = CANCEL_DIALOG_HEADERS.CONFIRM_CANCEL_OFFER_NEW;
    }
  }

  findPrefix(phoneCountryCode: string) {
    this.phonePrefix = PREFIXES.find((v) => v.prefix === phoneCountryCode)?.prefix || '';
  }

  onPhoneNumberChange($event: Event) {
    let val = ($event.target as HTMLInputElement).value;
    val = val.replace(MATCH_NON_DIGITS, '').replace(MATCH_SPACES, '');
    this.phoneInput.nativeElement.value = val;
    this.phoneNumber = val;
  }

  preparePhoneNumber() {
    this.data.phoneNumber = this.phonePrefix! + this.phoneNumber;
  }

  submitOffer(): void {
    if (this.phoneNumber) {
      this.preparePhoneNumber();
    } else {
      this.data.phoneNumber = undefined;
    }

    if (!this.isEditRoute) {
      this.transportResourceService
        .createTransport(this.data)
        .pipe(take(1))
        .subscribe(() => this.redirectOnSuccess());
    } else {
      this.transportResourceService
        .updateTransport(this.offerId!, this.data)
        .pipe(take(1))
        .subscribe(() => this.redirectOnSuccess());
    }
  }

  redirectOnSuccess() {
    if (!this.isEditRoute) {
      this.router.navigate([CorePath.MyAccount]).then((navigated: boolean) => {
        if (navigated) {
          this.snackbarService.openSnackAlert(ALERT_TYPES.OFFER_SUCCESS);
        }
      });
    } else {
      this.router.navigate([CorePath.MyAccount]).then((navigated: boolean) => {
        if (navigated) {
          this.snackbarService.openSnackAlert(ALERT_TYPES.UPDATE_OFFER_SUCCESS);
        }
      });
    }
  }

  onCancelButtonClick() {
    const dialogRef: MatDialogRef<ConfirmCancelDialogComponent> = this.dialog.open(ConfirmCancelDialogComponent);

    dialogRef.componentInstance.confirm.pipe(take(1)).subscribe((confirm: boolean) => {
      if (confirm) {
        this.router.navigate([CorePath.MyAccount]);
      }
      dialogRef.close();
    });
  }

  get isEditRoute(): boolean {
    return this.router.url === `/edycja-ogloszenia/transport/${this.offerId}`;
  }
}
