import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DIALOG_CANCEL_OFFER_CONFIG, LANGUAGES, PREFIXES } from '@app/shared/consts';
import { defaults } from '@app/shared/utils';
import { SnackbarService } from '@app/shared/services/snackbar.service';
import { CorePath, ALERT_TYPES, CANCEL_DIALOG_HEADERS, PhoneNumber, CategoryNameKey } from '@app/shared/models';
import { take } from 'rxjs/operators';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmCancelDialogComponent } from '@app/shared/components';
import { OfferDataInitService } from '@app/shared/services';
import {
  TranslationsOffer,
  TranslationsOfferDefinitionDTO,
} from 'src/app/find-help/translations-search/translations-search-form/translations-search-form.component';
import { TranslationsResourceService } from '@app/core/api/api/translationsResource.service';

@Component({
  selector: 'app-translations-form',
  templateUrl: './translations-form.component.html',
  styleUrls: ['./translations-form.component.scss'],
})
export class TranslationsFormComponent implements OnInit {
  data = defaults<TranslationsOfferDefinitionDTO>({});
  modes = Object.values(TranslationsOffer.ModeEnum);
  LANGUAGES = LANGUAGES;
  PREFIXES = PREFIXES;
  offerId?: number;
  phone = defaults<PhoneNumber>();
  constructor(
    private router: Router,
    private translationsResourceService: TranslationsResourceService,
    private snackbarService: SnackbarService,
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private offerDataInitService: OfferDataInitService
  ) {}

  ngOnInit(): void {
    this.offerId = Number(this.route.snapshot.paramMap.get('id'));

    if (this.isEditRoute) {
      this.offerDataInitService.initOfferDataForEdit(this, CategoryNameKey.TRANSLATIONS);
      DIALOG_CANCEL_OFFER_CONFIG.data.headerText = CANCEL_DIALOG_HEADERS.CONFIRM_CANCEL_OFFER_EDIT;
    } else {
      DIALOG_CANCEL_OFFER_CONFIG.data.headerText = CANCEL_DIALOG_HEADERS.CONFIRM_CANCEL_OFFER_NEW;
    }
  }

  handleSubmit() {
    this.offerDataInitService.preparePhoneNumber(this);
    if (!this.isEditRoute) {
      this.translationsResourceService
        .postTranslationsOfferTranslations(this.data)
        .pipe(take(1))
        .subscribe(() => this.redirectOnSuccess());
    } else {
      this.translationsResourceService
        .updateTranslate(this.offerId!, this.data)
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

  get isEditRoute(): boolean {
    return this.router.url === `/edycja-ogloszenia/tlumaczenia/${this.offerId}`;
  }
}
