import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MaterialAidOfferDefinitionDTO, MaterialAidResourceService } from '@app/core/api';
import { DIALOG_CANCEL_OFFER_CONFIG, PREFIXES } from '@app/shared/consts';
import { defaults } from '@app/shared/utils';
import { SnackbarService } from '@app/shared/services/snackbar.service';
import { CorePath, ALERT_TYPES, CANCEL_DIALOG_HEADERS } from '@app/shared/models';
import { take } from 'rxjs/operators';
import { MATCH_NON_DIGITS, MATCH_SPACES } from '@app/shared/consts';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmCancelDialogComponent } from '@app/shared/components';

const CATEGORIES = Object.entries(MaterialAidOfferDefinitionDTO.CategoryEnum).map(([key, value]) => ({
  key,
  value,
}));

@Component({
  selector: 'app-material-aid-form',
  templateUrl: './material-aid-form.component.html',
  styleUrls: ['./material-aid-form.component.scss'],
})
export class MaterialAidFormComponent implements OnInit {
  data = defaults<MaterialAidOfferDefinitionDTO>({});
  CATEGORIES = CATEGORIES;
  PREFIXES = PREFIXES;
  phonePrefix: string = '';
  phoneNumber: string = '';
  @ViewChild('phoneInput') phoneInput!: ElementRef<HTMLInputElement>;
  offerId?: number;
  constructor(
    private router: Router,
    private materialAidResourceService: MaterialAidResourceService,
    private snackbarService: SnackbarService,
    private dialog: MatDialog,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.offerId = Number(this.route.snapshot.paramMap.get('id'));

    if (this.isEditRoute) {
      this.materialAidResourceService.getMaterialAid(this.offerId).subscribe((resp) => {
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

  handleSubmit() {
    if (this.phoneNumber) {
      this.preparePhoneNumber();
    } else {
      this.data.phoneNumber = undefined;
    }

    if (!this.isEditRoute) {
      this.materialAidResourceService
        .postMaterialAidOfferMaterialAid(this.data)
        .pipe(take(1))
        .subscribe(() => this.redirectOnSuccess());
    } else {
      this.materialAidResourceService
        .updateMaterialAid(this.offerId!, this.data)
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
    return this.router.url === `/edycja-ogloszenia/pomoc-materialna/${this.offerId}`;
  }
}
