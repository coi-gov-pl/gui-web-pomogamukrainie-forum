import { Component, OnInit } from '@angular/core';
import { AccommodationQuery } from './accommodation-search-form/accommodation-search-form.component';
import { AccommodationsResourceService, AccommodationOffer, Pageable } from '@app/core/api';
import { CategoryRoutingName, CorePath } from '@app/shared/models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-accommodation-search',
  templateUrl: './accommodation-search.component.html',
  styleUrls: ['./accommodation-search.component.scss'],
})
export class AccommodationSearchComponent implements OnInit {
  results: AccommodationOffer[] = [];
  total?: number = undefined;
  loading = false;
  categoryRoutingName = CategoryRoutingName;
  corePath = CorePath;
  searchCriteria: AccommodationQuery = {};
  pagination: Pageable | undefined = {};
  constructor(private accommodationsResourceService: AccommodationsResourceService, private route: ActivatedRoute) {}

  ngOnInit() {
    const { page, size, capacity, city, region } = this.route.snapshot.queryParams;
    const searchCriteria: AccommodationQuery = {
      capacity,
      location: {
        region,
        city,
      },
    };
    if (page || size || capacity || city || region) {
      this.search(searchCriteria);
    }
  }

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

  search(searchCriteria?: AccommodationQuery) {
    this.loading = true;

    const { page, size, sort } = this.route.snapshot.queryParams;
    if (searchCriteria) {
      this.searchCriteria.capacity = searchCriteria?.capacity;
      this.searchCriteria.location = searchCriteria?.location;
    }

    const pageRequest: Pageable = {
      page,
      size,
      sort,
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
