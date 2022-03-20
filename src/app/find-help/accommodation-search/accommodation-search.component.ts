import { Component } from '@angular/core';
import { AccommodationQuery } from './accommodation-search-form/accommodation-search-form.component';
import { AccommodationsResourceService, AccommodationOffer, Pageable } from '@app/core/api';
import { CategoryRoutingName, CorePath } from '@app/shared/models';

@Component({
  selector: 'app-accommodation-search',
  templateUrl: './accommodation-search.component.html',
  styleUrls: ['./accommodation-search.component.scss'],
})
export class AccommodationSearchComponent {
  results: AccommodationOffer[] = [];
  total?: number = undefined;
  loading = false;
  categoryRoutingName = CategoryRoutingName;
  corePath = CorePath;
  searchCriteria: AccommodationQuery = {};
  pagination: Pageable | undefined = {};
  constructor(private accommodationsResourceService: AccommodationsResourceService) {}

  getResultsObservable(
    region: string | undefined,
    city: string | undefined,
    pageRequest: Pageable,
    capacity: number | undefined
  ) {
    if (region && city) {
      return this.accommodationsResourceService.listByLocationAccommodations(region, city, pageRequest, capacity);
    } else {
      return this.accommodationsResourceService.listAccommodations(pageRequest, capacity);
    }
  }

  search(searchCriteria?: AccommodationQuery, pagination?: Pageable) {
    this.loading = true;

    this.searchCriteria.capacity = searchCriteria?.capacity ?? this.searchCriteria.capacity;
    this.searchCriteria.location = searchCriteria?.location ?? this.searchCriteria.location;
    this.pagination = pagination ?? this.pagination;

    const pageRequest: Pageable = {
      page: pagination?.page,
      size: this.pagination?.size,
      sort: pagination?.sort,
    };

    const { location: { region, city } = {}, capacity } = this.searchCriteria;

    this.getResultsObservable(region, city, pageRequest, capacity).subscribe({
      next: (results) => {
        this.results = results.content ?? [];
        this.total = results.totalElements;
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
