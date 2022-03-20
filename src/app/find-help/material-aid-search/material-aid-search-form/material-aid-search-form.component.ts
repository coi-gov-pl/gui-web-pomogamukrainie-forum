import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { MaterialAidOffer, MaterialAidOfferSearchCriteria } from '@app/core/api';
import { StatementAnchors } from '@app/shared/models';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    if (Object.keys(this.route.snapshot.queryParams).length > 0) {
      const { category, city, region } = this.route.snapshot.queryParams;
      this.data = { category, location: city ? { city, region } : undefined };
    }
  }

  onSubmit(): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        page: 0,
        size: localStorage.getItem('size') ?? 5,
        category: this.data?.category,
        city: this.data.location?.city,
        region: this.data.location?.region,
      },
      queryParamsHandling: 'merge',
    });
    this.search.emit(this.data);
  }
}
