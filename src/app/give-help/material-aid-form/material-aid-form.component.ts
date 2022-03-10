import { Component } from '@angular/core';
import { MaterialAidOfferDefinitionDTO, MaterialAidResourceService } from '@app/core/api';
import { Location } from '@app/shared/components';
import { defaults } from '@app/shared/utils';
import { Offer } from '../offer-form/offer-form.component';

interface MaterialAid {
  location: Location;
  category: MaterialAidOfferDefinitionDTO.CategoryEnum;
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
  data = defaults<MaterialAid>({});
  categories = CATEGORIES;

  constructor(private materialAidResourceService: MaterialAidResourceService) {}

  handleSubmit(offer: Offer) {
    let data: MaterialAidOfferDefinitionDTO = { ...offer, ...this.data };
    this.materialAidResourceService.postMaterialAidOfferMaterialAid(data).subscribe((response) => {});
  }
}
