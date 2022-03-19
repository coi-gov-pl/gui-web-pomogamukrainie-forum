import { Component, Output, EventEmitter } from '@angular/core';
import { MaterialAidOffer, MaterialAidOfferSearchCriteria } from '@app/core/api';
import { StatementAnchors } from '@app/shared/models';

const categories = Object.entries(MaterialAidOffer.CategoryEnum).map(([key, value]) => ({
  code: key,
  value,
}));

interface Option {
  code: string;
  value: string;
}
@Component({
  selector: 'app-material-aid-search-form',
  templateUrl: './material-aid-search-form.component.html',
  styleUrls: ['./material-aid-search-form.component.scss'],
})
export class MaterialAidSearchFormComponent {
  data: MaterialAidOfferSearchCriteria = {};
  categories: Option[] = categories;
  @Output()
  search = new EventEmitter<MaterialAidOfferSearchCriteria>();
  statementAnchor: string = StatementAnchors.MATERIAL_AID;
}
