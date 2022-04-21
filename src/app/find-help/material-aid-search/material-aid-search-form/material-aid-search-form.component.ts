import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MaterialAidOffer, MaterialAidOfferSearchCriteria } from '@app/core/api';
import { StoreUrlService } from '@app/core/store-url';
import { LocalStorageKeys, StatementAnchors } from '@app/shared/models';
import { SortingFieldName, SortingOrder } from '@app/shared/models/sortingOrder.model';

const categories = Object.entries(MaterialAidOffer.CategoryEnum).map(([key, value]) => ({
  code: key,
  value,
}));

interface Option {
  code: string;
  value: string;
}

const cleanForm = {
  location: undefined,
  category: undefined,
  city: undefined,
  region: undefined,
};

@Component({
  selector: 'app-material-aid-search-form',
  templateUrl: './material-aid-search-form.component.html',
  styleUrls: ['./material-aid-search-form.component.scss', '../../common-styles/find-help.styles.scss'],
})
export class MaterialAidSearchFormComponent implements OnInit {
  data: MaterialAidOfferSearchCriteria = {};
  categories: Option[] = categories;
  @Output()
  search = new EventEmitter<MaterialAidOfferSearchCriteria>();
  statementAnchor: string = StatementAnchors.MATERIAL_AID;

  constructor(private router: Router, private route: ActivatedRoute, private storeUrlService: StoreUrlService) {}

  ngOnInit() {
    if (Object.keys(this.route.snapshot.queryParams).length > 0) {
      const { category, city, region } = this.route.snapshot.queryParams;
      this.data = { category, location: city ? { city, region } : undefined };
    }
  }

  async onSubmit(): Promise<void> {
    const param: Params = {
      page: 0,
      size: localStorage.getItem(LocalStorageKeys.PageSize) ?? 5,
      sort: [`${SortingFieldName},${SortingOrder.descending}`],
      category: this.data?.category,
      city: this.data.location?.city,
      region: this.data.location?.region,
    };
    await this.storeUrlService.setCustomPaginatorParam(param);
    this.search.emit(this.data);
  }

  async clearFilters(): Promise<void> {
    this.data = {};
    const { page, size, sort } = this.route.snapshot.queryParams;
    const param: Params = {
      page,
      size,
      sort,
      ...cleanForm,
    };
    await this.storeUrlService.setCustomPaginatorParam(param);
    this.search.emit(this.data);
  }
}
