import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { LawOfferDefinitionDTO, LawResourceService } from '@app/core/api';
import { ConfirmCancelDialogComponent } from '@app/shared/components';
import { DIALOG_CANCEL_OFFER_CONFIG, LANGUAGES, LENGTH_OF_STAY, PREFIXES } from '@app/shared/consts';
import { ALERT_TYPES, CANCEL_DIALOG_HEADERS, CategoryNameKey, CorePath, PhoneNumber } from '@app/shared/models';
import { OfferDataInitService, SnackbarService } from '@app/shared/services';
import { defaults } from '@app/shared/utils';
import { Observable, of, switchMap, take } from 'rxjs';

@Component({
  selector: 'app-law-form',
  templateUrl: './law-form.component.html',
  styleUrls: ['./law-form.component.scss'],
})
export class LawFormComponent implements OnInit {
  LENGTH_OF_STAY = LENGTH_OF_STAY;
  LAW_LANGUAGES = LANGUAGES;
  PREFIXES = PREFIXES;
  HELP_KIND = Object.values(LawOfferDefinitionDTO.HelpKindEnum);
  HELP_MODE = Object.values(LawOfferDefinitionDTO.HelpModeEnum);
  data = defaults<LawOfferDefinitionDTO>({
    helpMode: [],
    helpKind: [],
    language: [],
  });
  offerId?: number;
  phone = defaults<PhoneNumber>();
  isSaved = false;
  @ViewChild('legalForm', { static: true })
  ngForm: NgForm = new NgForm([], []);

  constructor(
    private LawResourceService: LawResourceService,
    private router: Router,
    private dialog: MatDialog,
    private snackbarService: SnackbarService,
    private route: ActivatedRoute,
    private offerDataInitService: OfferDataInitService
  ) {}

  ngOnInit(): void {
    this.offerId = Number(this.route.snapshot.paramMap.get('id'));

    if (this.isEditRoute) {
      this.offerDataInitService.initOfferDataForEdit(this, CategoryNameKey.LEGAL_HELP);
      DIALOG_CANCEL_OFFER_CONFIG.data.headerText = CANCEL_DIALOG_HEADERS.CONFIRM_CANCEL_OFFER_EDIT;
    } else {
      DIALOG_CANCEL_OFFER_CONFIG.data.headerText = CANCEL_DIALOG_HEADERS.CONFIRM_CANCEL_OFFER_NEW;
    }
  }

  submitOffer(): void {
    this.offerDataInitService.preparePhoneNumber(this);
    if (!this.isEditRoute) {
      this.LawResourceService.createLaw(this.data)
        .pipe(take(1))
        .subscribe(() => this.redirectOnSuccess());
    } else {
      this.LawResourceService.updateLaw(this.offerId!, this.data)
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
  }

  onCancelButtonClick() {
    this.router.navigate([CorePath.MyAccount]);
  }

  get isEditRoute(): boolean {
    return this.router.url === `/edycja-ogloszenia/pomoc-prawna/${this.offerId}`;
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
