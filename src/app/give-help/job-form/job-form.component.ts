import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { SnackbarService } from '@app/shared/services';
import {
  DIALOG_CANCEL_OFFER_CONFIG,
  MATCH_NON_DIGITS,
  MATCH_SPACES,
  PREFIXES,
  JOB_LANGUAGES,
} from '@app/shared/consts';
import { defaults } from '@app/shared/utils';
import { ALERT_TYPES, CANCEL_DIALOG_HEADERS, CorePath } from '@app/shared/models';
import { take } from 'rxjs';
import { ConfirmCancelDialogComponent } from '@app/shared/components/confirm-cancel-dialog/cancel-dialog.component';
import { JobResourceService } from '@app/core/api/api/jobResource.service';
import { JobOfferDefinitionDTO } from '@app/core/api/model/jobOfferDefinitionDTO';

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
  phonePrefix: string = '';
  phoneNumber: string = '';
  LANGUAGES = JOB_LANGUAGES;
  PREFIXES = PREFIXES;
  INDUSTRIES = INDUSTRIES;
  JOB_MODES = JOB_MODES;
  CONTRACT_TYPE = CONTRACT_TYPE;
  WORK_TIME = WORK_TIME;
  data = defaults<JobOfferDefinitionDTO>({});
  @ViewChild('phoneInput') phoneInput!: ElementRef<HTMLInputElement>;
  @Input() buttonLabel: string = '';
  offerId?: number;

  constructor(
    private jobResourceService: JobResourceService,
    private router: Router,
    private dialog: MatDialog,
    private snackbarService: SnackbarService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.offerId = Number(this.route.snapshot.paramMap.get('id'));
    if (!this.isEditRoute) {
      DIALOG_CANCEL_OFFER_CONFIG.data.headerText = CANCEL_DIALOG_HEADERS.CONFIRM_CANCEL_OFFER_NEW;
    } else {
      DIALOG_CANCEL_OFFER_CONFIG.data.headerText = CANCEL_DIALOG_HEADERS.CONFIRM_CANCEL_OFFER_EDIT;
    }
  }

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
    if (this.phoneNumber) {
      this.preparePhoneNumber();
    } else {
      this.data.phoneNumber = undefined;
    }
    this.jobResourceService
      .createJob(this.data)
      .pipe(take(1))
      .subscribe(() => this.redirectOnSuccess());
  }

  redirectOnSuccess() {
    this.router.navigate([CorePath.MyAccount]).then((navigated: boolean) => {
      if (navigated) {
        this.snackbarService.openSnackAlert(ALERT_TYPES.OFFER_SUCCESS);
      }
    });
  }

  onCancelButtonClick() {
    const dialogRef: MatDialogRef<ConfirmCancelDialogComponent> = this.dialog.open(
      ConfirmCancelDialogComponent,
      DIALOG_CANCEL_OFFER_CONFIG
    );

    dialogRef.componentInstance.confirm.pipe(take(1)).subscribe((confirm: boolean) => {
      if (confirm) {
        this.router.navigate([CorePath.MyAccount]);
      }
      dialogRef.close();
    });
  }

  get isEditRoute(): boolean {
    return this.router.url === `/edycja-ogloszenia/praca/${this.offerId}`;
  }
}
