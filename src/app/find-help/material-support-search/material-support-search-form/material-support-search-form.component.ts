import { Component, Output, EventEmitter } from '@angular/core';
import { MaterialAidOffer } from '../../../../api/model/materialAidOffer';

const categories = Object.entries(MaterialAidOffer.CategoryEnum).map(([key, value]) => ({
  code: key,
  label: value,
}));

export interface MaterialSupportQuery {
  location?: {
    city: string;
    region: string;
  };
  category?: string;
}
interface Option {
  code: string;
  label: string;
}
@Component({
  selector: 'app-material-support-search-form',
  templateUrl: './material-support-search-form.component.html',
  styleUrls: ['./material-support-search-form.component.scss'],
})
export class MaterialSupportSearchFormComponent {
  data: MaterialSupportQuery = {};
  categories: Option[] = categories;
  @Output()
  search = new EventEmitter<MaterialSupportQuery>();
}
