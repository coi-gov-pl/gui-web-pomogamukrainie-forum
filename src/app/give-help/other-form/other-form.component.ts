import { Component, ViewChild, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OtherOfferDefinitionDTO, OtherResourceService } from '@app/core/api';
import { DIALOG_CANCEL_OFFER_CONFIG, PREFIXES } from '@app/shared/consts';
import { defaults } from '@app/shared/utils';
import { SnackbarService } from '@app/shared/services/snackbar.service';
import { CorePath, ALERT_TYPES, CANCEL_DIALOG_HEADERS, PhoneNumber, CategoryNameKey } from '@app/shared/models';
import { switchMap, take } from 'rxjs/operators';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmCancelDialogComponent } from '@app/shared/components';
import { OfferDataInitService } from '@app/shared/services';
import { Observable, of } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-other-form',
  templateUrl: './other-form.component.html',
  styleUrls: ['./other-form.component.scss'],
})
export class OtherFormComponent implements OnInit {
  data = defaults<OtherOfferDefinitionDTO>({});
  PREFIXES = PREFIXES;
  offerId?: number;
  phone = defaults<PhoneNumber>();
  isSaved = false;
  @ViewChild('otherForm', { static: true })
  ngForm: NgForm = new NgForm([], []);

  constructor(
    private router: Router,
    private otherResourceService: OtherResourceService,
    private snackbarService: SnackbarService,
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private offerDataInitService: OfferDataInitService
  ) {}

  ngOnInit(): void {
    this.offerId = Number(this.route.snapshot.paramMap.get('id'));

    if (this.isEditRoute) {
      this.offerDataInitService.initOfferDataForEdit(this, CategoryNameKey.OTHER);
      DIALOG_CANCEL_OFFER_CONFIG.data.headerText = CANCEL_DIALOG_HEADERS.CONFIRM_CANCEL_OFFER_EDIT;
    } else {
      DIALOG_CANCEL_OFFER_CONFIG.data.headerText = CANCEL_DIALOG_HEADERS.CONFIRM_CANCEL_OFFER_NEW;
    }
  }

  handleSubmit() {
    this.offerDataInitService.preparePhoneNumber(this);
    if (!this.isEditRoute) {
      this.otherResourceService
        .createOther(this.data)
        .pipe(take(1))
        .subscribe(() => this.redirectOnSuccess());
    } else {
      this.otherResourceService
        .updateOther(this.offerId!, this.data)
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
    return this.router.url === `/edycja-ogloszenia/inne/${this.offerId}`;
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
