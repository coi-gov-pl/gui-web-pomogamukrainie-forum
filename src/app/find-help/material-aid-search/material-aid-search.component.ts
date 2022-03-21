import { Component } from '@angular/core';
import { Pageable, MaterialAidOfferSearchCriteria, MaterialAidResourceService, MaterialAidOffer } from '@app/core/api';
import { CategoryRoutingName, CorePath } from '@app/shared/models';

@Component({
  selector: 'app-material-aid-search',
  templateUrl: './material-aid-search.component.html',
  styleUrls: ['./material-aid-search.component.scss'],
})
export class MaterialAidSearchComponent {
  results: MaterialAidOffer[] = [];
  total?: number = undefined;
  loading = false;
  categoryRoutingName = CategoryRoutingName;
  corePath = CorePath;
  modifiedDateSortOrder: 'asc' | 'desc' = 'asc';
  searchCriteria!: MaterialAidOfferSearchCriteria;
  constructor(private materialAidResourceService: MaterialAidResourceService) {}

  search(searchCriteria: MaterialAidOfferSearchCriteria = this.searchCriteria) {
    this.searchCriteria = searchCriteria;
    this.loading = true;

    const pageRequest: Pageable = {
      // page?: number;
      // size?: number;
      sort: [`modifiedDate,${this.modifiedDateSortOrder}`],
    };

    this.materialAidResourceService.listMaterialAid(pageRequest, searchCriteria).subscribe({
      next: (results) => {
        this.results = results.content ?? [];
        this.total = results.totalElements ?? 0;
        this.loading = false;
      },
      error: () => {
        this.results = [];
        this.total = undefined;
        this.loading = false;
      },
    });
  }
}
