import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { MaterialAidOfferDefinitionDTO, MaterialAidResourceService } from '@app/core/api';
import { PREFIXES } from '@app/shared/consts';
import { defaults } from '@app/shared/utils';
import { SnackbarService } from '@app/shared/services/snackbar.service';
import { CorePath, ALERT_TYPES } from '@app/shared/models';
import { take } from 'rxjs/operators';
import { MATCH_NON_DIGITS, MATCH_SPACES } from '@app/shared/consts';

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
  loading: boolean = false;
  @ViewChild('phoneInput') phoneInput!: ElementRef<HTMLInputElement>;

  constructor(
    private router: Router,
    private materialAidResourceService: MaterialAidResourceService,
    private snackbarService: SnackbarService
  ) {}

  onPrefixNumberChange() {
    this.preparePhoneNumber();
  }

  onPhoneNumberChange($event: Event) {
    let val = ($event.target as HTMLInputElement).value;
    if (val) {
      val = val.replace(MATCH_NON_DIGITS, '').replace(MATCH_SPACES, '');
      this.phoneInput.nativeElement.value = val;
      this.data.phoneNumber = val;
      this.preparePhoneNumber();
    }
  }

  preparePhoneNumber() {
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
