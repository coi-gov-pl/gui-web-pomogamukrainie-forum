import { Component, ViewChild, Input, ElementRef, OnInit } from '@angular/core';
import { defaults } from '@app/shared/utils';
import { PREFIXES, LANGUAGES, LENGTH_OF_STAY } from '@app/shared/consts';
import { AccommodationOfferDefinitionDTO, AccommodationsResourceService } from '@app/core/api';
import { CorePath, ALERT_TYPES, CANCEL_DIALOG_HEADERS } from '@app/shared/models';
import { SnackbarService } from '@app/shared/services';
import { take } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { MATCH_NON_DIGITS, MATCH_SPACES } from '@app/shared/consts';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmCancelDialogComponent } from '@app/shared/components';
import { DIALOG_CANCEL_OFFER_CONFIG } from '@app/shared/consts';
@Component({
  selector: 'app-accommodation-form',
  templateUrl: './accommodation-form.component.html',
  styleUrls: ['./accommodation-form.component.scss'],
})
export class AccommodationFormComponent implements OnInit {
  phonePrefix: string | undefined = '';
  phoneNumber: string | undefined = '';
  LENGTH_OF_STAY = LENGTH_OF_STAY;
  LANGUAGES = LANGUAGES;
  PREFIXES = PREFIXES;
  data = defaults<AccommodationOfferDefinitionDTO>({
    hostLanguage: [],
  });
  @ViewChild('phoneInput') phoneInput!: ElementRef<HTMLInputElement>;
  @Input() buttonLabel: string = '';
  offerId?: number;

  constructor(
    private accommodationsResourceService: AccommodationsResourceService,
    private router: Router,
    private dialog: MatDialog,
    private snackbarService: SnackbarService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.offerId = Number(this.route.snapshot.paramMap.get('id'));

    if (this.isEditRoute) {
      this.accommodationsResourceService.getAccommodations(this.offerId).subscribe((resp) => {
        this.phoneNumber = resp.phoneNumber;
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
    this.phonePrefix = PREFIXES.find((v) => v.prefix === phoneCountryCode)?.prefix;
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
      this.accommodationsResourceService
        .createAccommodations(this.data)
        .pipe(take(1))
        .subscribe(() => this.redirectOnSuccess());
    } else {
      this.accommodationsResourceService
        .updateAccommodations(this.offerId!, this.data)
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
    return this.router.url === `/edycja-ogloszenia/noclegi/${this.offerId}`;
  }
}
