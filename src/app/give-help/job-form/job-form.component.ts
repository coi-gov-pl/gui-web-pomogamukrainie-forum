import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { JobResourceService } from '@app/core/api/api/jobResource.service';
import { JobOfferDefinitionDTO } from '@app/core/api/model/jobOfferDefinitionDTO';
import { ConfirmCancelDialogComponent } from '@app/shared/components/confirm-cancel-dialog/cancel-dialog.component';
import { DIALOG_CANCEL_OFFER_CONFIG, LANGUAGES, PREFIXES } from '@app/shared/consts';
import { ALERT_TYPES, CANCEL_DIALOG_HEADERS, CategoryNameKey, CorePath, PhoneNumber } from '@app/shared/models';
import { OfferDataInitService, SnackbarService } from '@app/shared/services';
import { defaults } from '@app/shared/utils';
import { Observable, of, switchMap, take } from 'rxjs';

const INDUSTRIES = Object.entries(JobOfferDefinitionDTO.IndustryEnum).map(([key, value]) => ({
  key,
  value,
}));

const JOB_MODES = Object.entries(JobOfferDefinitionDTO.ModeEnum).map(([key, value]) => ({
  key,
  value,
}));

const CONTRACT_TYPE = Object.entries(JobOfferDefinitionDTO.ContractTypeEnum).map(([key, value]) => ({
  key,
  value,
}));

const WORK_TIME = Object.entries(JobOfferDefinitionDTO.WorkTimeEnum).map(([key, value]) => ({
  key,
  value,
}));

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.scss'],
})
export class JobFormComponent implements OnInit {
  LANGUAGES = LANGUAGES;
  PREFIXES = PREFIXES;
  INDUSTRIES = INDUSTRIES;
  JOB_MODES = JOB_MODES;
  CONTRACT_TYPE = CONTRACT_TYPE;
  WORK_TIME = WORK_TIME;
  data = defaults<JobOfferDefinitionDTO>({});
  @Input() buttonLabel: string = '';
  offerId?: number;
  phone = defaults<PhoneNumber>();
  isSaved = false;
  @ViewChild('jobForm', { static: true })
  ngForm: NgForm = new NgForm([], []);

  constructor(
    private jobResourceService: JobResourceService,
    private router: Router,
    private dialog: MatDialog,
    private snackbarService: SnackbarService,
    private route: ActivatedRoute,
    private offerDataInitService: OfferDataInitService
  ) {}

  ngOnInit(): void {
    this.offerId = Number(this.route.snapshot.paramMap.get('id'));

    if (!this.isEditRoute) {
      DIALOG_CANCEL_OFFER_CONFIG.data.headerText = CANCEL_DIALOG_HEADERS.CONFIRM_CANCEL_OFFER_NEW;
    } else {
      this.offerDataInitService.initOfferDataForEdit(this, CategoryNameKey.JOB);
      DIALOG_CANCEL_OFFER_CONFIG.data.headerText = CANCEL_DIALOG_HEADERS.CONFIRM_CANCEL_OFFER_EDIT;
    }
  }

  submitOffer(): void {
    this.offerDataInitService.preparePhoneNumber(this);
    if (!this.isEditRoute) {
      this.jobResourceService
        .createJob(this.data)
        .pipe(take(1))
        .subscribe(() => this.redirectOnSuccess());
    } else {
      this.jobResourceService
        .updateJob(this.offerId!, this.data)
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
    return this.router.url === `/edycja-ogloszenia/praca/${this.offerId}`;
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
