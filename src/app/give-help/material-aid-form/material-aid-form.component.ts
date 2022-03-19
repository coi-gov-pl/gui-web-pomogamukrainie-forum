import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MaterialAidOfferDefinitionDTO, MaterialAidResourceService } from '@app/core/api';
import { PREFIXES } from '@app/shared/consts';
import { defaults } from '@app/shared/utils';
import { CorePath } from '@app/shared/models/core-path.model';
import { SnackbarService } from '@app/shared/services/snackbar.service';
import { ALERT_TYPES } from '@app/shared/models';
import { take } from 'rxjs/operators';
// Waiting for TransportOfferDefinitionDTO receive a phoneNumber prop
interface MaterialAidOfferDefinition extends MaterialAidOfferDefinitionDTO {
  phoneNumber?: string;
}
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
  data = defaults<MaterialAidOfferDefinition>({});
  CATEGORIES = CATEGORIES;
  PREFIXES = PREFIXES;
  phonePrefix: string = '48';
  phoneNumber: string = '';
  loading: boolean = false;
  constructor(
    private router: Router,
    private materialAidResourceService: MaterialAidResourceService,
    private snackbarService: SnackbarService
  ) {}

  onPhoneNumberChange(): void {
    this.data.phoneNumber = this.phonePrefix + this.phoneNumber;
  }

  handleSubmit() {
    this.loading = true;
    this.materialAidResourceService
      .postMaterialAidOfferMaterialAid(this.data)
      .pipe(take(1))
      .subscribe(
        (response) => this.redirectOnSuccess(),
        (error) => this.snackbarService.openSnack(error.message, ALERT_TYPES.ERROR)
      )
      .add(() => (this.loading = false));
  }

  redirectOnSuccess() {
    this.router.navigate([CorePath.MyAccount]).then((navigated: boolean) => {
      if (navigated) {
        this.snackbarService.openSnackAlert(ALERT_TYPES.OFFER_SUCCESS);
      }
    });
  }
}
