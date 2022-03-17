import { Component } from '@angular/core';
import { MaterialAidOfferDefinitionDTO, MaterialAidResourceService } from '@app/core/api';
import { Location } from '@app/shared/components';
import { PREFIXES } from '@app/shared/consts';
import { defaults } from '@app/shared/utils';

// interface MaterialAid {
//   location: Location;
//   category: MaterialAidOfferDefinitionDTO.CategoryEnum;
// }

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
  categories = CATEGORIES;
  PREFIXES = PREFIXES;
  phonePrefix: string = '48';
  phoneNumber: string = '';

  constructor(private materialAidResourceService: MaterialAidResourceService) {}

  onPhoneNumberChange(): void {
    // Waiting for TransportOfferDefinitionDTO receive a phoneNumber prop
    // this.data.phoneNumber = this.phonePrefix + this.phoneNumber;
  }

  handleSubmit() {
    console.log('submit');
    this.materialAidResourceService.postMaterialAidOfferMaterialAid(this.data).subscribe((response) => {});
  }
}
