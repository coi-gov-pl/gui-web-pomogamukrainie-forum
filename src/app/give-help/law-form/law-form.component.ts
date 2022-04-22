import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { LawOfferDefinitionDTO, LawResourceService } from '@app/core/api';
import { ConfirmCancelDialogComponent } from '@app/shared/components';
import {
  DIALOG_CANCEL_OFFER_CONFIG,
  LAW_LANGUAGES,
  LENGTH_OF_STAY,
  MATCH_NON_DIGITS,
  MATCH_SPACES,
  PREFIXES,
} from '@app/shared/consts';
import { ALERT_TYPES, CANCEL_DIALOG_HEADERS, CorePath } from '@app/shared/models';
import { SnackbarService } from '@app/shared/services';
import { defaults } from '@app/shared/utils';
import { take } from 'rxjs';

@Component({
  selector: 'app-law-form',
  templateUrl: './law-form.component.html',
  styleUrls: ['./law-form.component.scss'],
})
export class LawFormComponent implements OnInit {
  phonePrefix: string = '';
  phoneNumber: string = '';
  LENGTH_OF_STAY = LENGTH_OF_STAY;
  LAW_LANGUAGES = LAW_LANGUAGES;
  PREFIXES = PREFIXES;
  HELP_KIND = Object.values(LawOfferDefinitionDTO.HelpKindEnum);
  HELP_MODE = Object.values(LawOfferDefinitionDTO.HelpModeEnum);
  data = defaults<LawOfferDefinitionDTO>({
    helpMode: [],
    helpKind: [],
    language: [],
  });
  offerId?: number;
  @ViewChild('phoneInput') phoneInput!: ElementRef<HTMLInputElement>;

  constructor(
    private LawResourceService: LawResourceService,
    private router: Router,
    private dialog: MatDialog,
    private snackbarService: SnackbarService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.offerId = Number(this.route.snapshot.paramMap.get('id'));

    if (this.isEditRoute) {
      this.LawResourceService.getLaw(this.offerId).subscribe((resp) => {
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

  submitOffer() {
    if (this.phoneNumber) {
      this.preparePhoneNumber();
    } else {
      this.data.phoneNumber = undefined;
    }

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
    this.data.phoneNumber = this.phonePrefix + this.phoneNumber;
  }

  get isEditRoute(): boolean {
    return this.router.url === `/edycja-ogloszenia/pomoc-prawna/${this.offerId}`;
  }
}
