import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { MaterialAidOfferDefinitionDTO, MaterialAidResourceService } from '@app/core/api';
import { DIALOG_BOX_CONFIG, PREFIXES } from '@app/shared/consts';
import { defaults } from '@app/shared/utils';
import { SnackbarService } from '@app/shared/services/snackbar.service';
import { CorePath, ALERT_TYPES } from '@app/shared/models';
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
export class MaterialAidFormComponent {
  data = defaults<MaterialAidOfferDefinitionDTO>({});
  CATEGORIES = CATEGORIES;
  PREFIXES = PREFIXES;
  phonePrefix: string = '';
  phoneNumber: string = '';
  @ViewChild('phoneInput') phoneInput!: ElementRef<HTMLInputElement>;

  constructor(
    private router: Router,
    private materialAidResourceService: MaterialAidResourceService,
    private snackbarService: SnackbarService,
    private dialog: MatDialog
  ) {}

  onPhoneNumberChange($event: Event) {
    let val = ($event.target as HTMLInputElement).value;
    val = val.replace(MATCH_NON_DIGITS, '').replace(MATCH_SPACES, '');
    this.phoneInput.nativeElement.value = val;
    this.phoneNumber = val;
  }

  preparePhoneNumber() {
    this.data.phoneNumber = this.phonePrefix + this.phoneNumber;
  }

  handleSubmit() {
    if (this.phoneNumber) {
      this.preparePhoneNumber();
    } else {
      this.data.phoneNumber = undefined;
    }
    this.materialAidResourceService
      .postMaterialAidOfferMaterialAid(this.data)
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
      DIALOG_BOX_CONFIG
    );

    dialogRef.componentInstance.confirm.pipe(take(1)).subscribe((confirm: boolean) => {
      if (confirm) {
        this.router.navigate([CorePath.MyAccount]);
      }
      dialogRef.close();
    });
  }
}
