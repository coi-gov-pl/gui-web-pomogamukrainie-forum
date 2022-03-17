import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MaterialAidOfferDefinitionDTO, MaterialAidResourceService } from '@app/core/api';
import { PREFIXES } from '@app/shared/consts';
import { defaults } from '@app/shared/utils';
import { OFFER_SENT_ALERT } from '@app/shared/consts';
import { SnackAlertComponent } from '../../shared/components/snackbar/snackbar.component';
import { CorePath } from '@app/shared/models/core-path.enum';

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
  phonePrefix: string = '48';
  phoneNumber: string = '';
  OFFER_SENT_ALERT = OFFER_SENT_ALERT;
  constructor(
    private router: Router,
    private materialAidResourceService: MaterialAidResourceService,
    private snackBar: MatSnackBar
  ) {}

  onPhoneNumberChange(): void {
    // Waiting for TransportOfferDefinitionDTO receive a phoneNumber prop
    // this.data.phoneNumber = this.phonePrefix + this.phoneNumber;
  }

  handleSubmit() {
    this.materialAidResourceService.postMaterialAidOfferMaterialAid(this.data).subscribe((response) => {
      this.router.navigate([CorePath.MyAccount]).then((navigated: boolean) => {
        if (navigated) {
          this.snackBar.openFromComponent(SnackAlertComponent, {
            data: this.OFFER_SENT_ALERT,
            panelClass: 'snackbar-alert',
            duration: 10000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
        }
      });
    });
  }
}
