import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { MaterialAidOffer, MaterialAidOfferSearchCriteria } from '@app/core/api';
import { StatementAnchors } from '@app/shared/models';
import { ActivatedRoute, Router } from '@angular/router';
import { StoreUrlService } from '@app/core/store-url/store-url.service';

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
    await this.storeUrlService.setDefaultPaginatorParam();
    this.search.emit(this.data);
  }
}
