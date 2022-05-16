import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { defaults } from '@app/shared/utils';
import { TransportOfferDefinitionDTO, TransportResourceService } from '@app/core/api';
import { DIALOG_CANCEL_OFFER_CONFIG, PREFIXES } from '@app/shared/consts';
import { SnackbarService } from '@app/shared/services/snackbar.service';
import { CorePath, ALERT_TYPES, CANCEL_DIALOG_HEADERS, CategoryNameKey, PhoneNumber } from '@app/shared/models';
import { switchMap, take } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmCancelDialogComponent } from '@app/shared/components';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { OfferDataInitService } from '@app/shared/services';
import { Observable, of } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-transport-form',
  templateUrl: './transport-form.component.html',
  styleUrls: ['./transport-form.component.scss'],
})
export class TransportFormComponent implements OnInit {
  minDate: Date = new Date();
  PREFIXES = PREFIXES;
  phone = defaults<PhoneNumber>();
  data = defaults<TransportOfferDefinitionDTO>();
  offerId?: number;
  isSaved = false;
  @ViewChild('transportForm', { static: true })
  ngForm: NgForm = new NgForm([], []);

  constructor(
    private transportResourceService: TransportResourceService,
    private router: Router,
    private snackbarService: SnackbarService,
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private offerDataInitService: OfferDataInitService
  ) {}

  ngOnInit(): void {
    this.offerId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.isEditRoute) {
      this.offerDataInitService.initOfferDataForEdit(this, CategoryNameKey.TRANSPORT);
      DIALOG_CANCEL_OFFER_CONFIG.data.headerText = CANCEL_DIALOG_HEADERS.CONFIRM_CANCEL_OFFER_EDIT;
    } else {
      DIALOG_CANCEL_OFFER_CONFIG.data.headerText = CANCEL_DIALOG_HEADERS.CONFIRM_CANCEL_OFFER_NEW;
    }
  }

  submitOffer(): void {
    this.offerDataInitService.preparePhoneNumber(this);
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
          this.snackbarService.openUpperSnackAlert(ALERT_TYPES.OFFER_SUCCESS);
        }
      });
    } else {
      this.router.navigate([CorePath.MyAccount]).then((navigated: boolean) => {
        if (navigated) {
          this.snackbarService.openUpperSnackAlert(ALERT_TYPES.UPDATE_OFFER_SUCCESS);
        }
      });
    }
    this.isSaved = true;
  }

  onCancelButtonClick() {
    this.router.navigate([CorePath.MyAccount]);
  }

  get isEditRoute(): boolean {
    return this.router.url === `/edycja-ogloszenia/transport/${this.offerId}`;
  }

  canDeactivate(): Observable<boolean | undefined> {
    if (!this.isSaved && this.ngForm.form.touched) {
      const dialogRef: MatDialogRef<ConfirmCancelDialogComponent> = this.dialog.open(
        ConfirmCancelDialogComponent,
        DIALOG_CANCEL_OFFER_CONFIG
      );

      const result = dialogRef.componentInstance.confirm.pipe(
        switchMap((confirm) => {
          dialogRef.close();
          return of(confirm);
        })
      );
      return result;
    }
    return of(true);
  }
}
