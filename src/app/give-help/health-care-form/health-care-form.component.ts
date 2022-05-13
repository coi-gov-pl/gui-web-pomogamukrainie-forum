import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { defaults } from '@app/shared/utils';
import { PREFIXES, LANGUAGES, LENGTH_OF_STAY } from '@app/shared/consts';
import { HealthResourceService, HealthOfferDefinitionDTO } from '@app/core/api';
import { CorePath, ALERT_TYPES, CANCEL_DIALOG_HEADERS, PhoneNumber, CategoryNameKey } from '@app/shared/models';
import { OfferDataInitService, SnackbarService } from '@app/shared/services';
import { switchMap, take } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmCancelDialogComponent } from '@app/shared/components';
import { DIALOG_CANCEL_OFFER_CONFIG } from '@app/shared/consts';
import { Observable, of } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-health-care-form',
  templateUrl: './health-care-form.component.html',
  styleUrls: ['./health-care-form.component.scss'],
})
export class HealthCareFormComponent implements OnInit {
  LENGTH_OF_STAY = LENGTH_OF_STAY;
  LANGUAGES = LANGUAGES;
  PREFIXES = PREFIXES;
  data = defaults<HealthOfferDefinitionDTO>({
    mode: [],
    language: [],
  });
  @Input() buttonLabel: string = '';
  offerId?: number;
  MODE_ENUM = Object.values(HealthOfferDefinitionDTO.ModeEnum);
  SPECIALIZATION_ENUM = Object.values(HealthOfferDefinitionDTO.SpecializationEnum);
  phone = defaults<PhoneNumber>();
  isSaved = false;
  @ViewChild('healthCareForm', { static: true })
  ngForm: NgForm = new NgForm([], []);

  constructor(
    private HealthResourceService: HealthResourceService,
    private router: Router,
    private dialog: MatDialog,
    private snackbarService: SnackbarService,
    private route: ActivatedRoute,
    private offerDataInitService: OfferDataInitService
  ) {}

  ngOnInit(): void {
    this.offerId = Number(this.route.snapshot.paramMap.get('id'));

    if (this.isEditRoute) {
      this.offerDataInitService.initOfferDataForEdit(this, CategoryNameKey.HEALTH);
      DIALOG_CANCEL_OFFER_CONFIG.data.headerText = CANCEL_DIALOG_HEADERS.CONFIRM_CANCEL_OFFER_EDIT;
    } else {
      DIALOG_CANCEL_OFFER_CONFIG.data.headerText = CANCEL_DIALOG_HEADERS.CONFIRM_CANCEL_OFFER_NEW;
    }
  }

  submitOffer(): void {
    this.offerDataInitService.preparePhoneNumber(this);
    if (!this.isEditRoute) {
      this.HealthResourceService.createHealth(this.data)
        .pipe(take(1))
        .subscribe(() => this.redirectOnSuccess());
    } else {
      this.HealthResourceService.updateHealth(this.offerId!, this.data)
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
    return this.router.url === `/edycja-ogloszenia/zdrowie/${this.offerId}`;
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
