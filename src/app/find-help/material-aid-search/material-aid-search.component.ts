import { Component } from '@angular/core';
import { MaterialAidOffer, MaterialAidOfferSearchCriteria, MaterialAidResourceService, Pageable } from '@app/core/api';
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
  searchCriteria: MaterialAidOfferSearchCriteria = {};
  pagination: Pageable | undefined = {};
  modifiedDateSortOrder: 'asc' | 'desc' = 'desc';
  constructor(private materialAidResourceService: MaterialAidResourceService) {}

  search(searchCriteria?: MaterialAidOfferSearchCriteria, pagination?: Pageable) {
    this.loading = true;

    this.searchCriteria.category = searchCriteria?.category ?? this.searchCriteria.category;
    this.searchCriteria.location = searchCriteria?.location ?? this.searchCriteria.location;
    this.pagination = pagination ?? this.pagination;

    const pageRequest: Pageable = {
      page: pagination?.page,
      size: this.pagination?.size,
      sort: [`modifiedDate,${this.modifiedDateSortOrder}`],
    };

    this.materialAidResourceService.listMaterialAid(pageRequest, this.searchCriteria).subscribe({
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
