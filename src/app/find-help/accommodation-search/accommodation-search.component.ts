import { Component } from '@angular/core';
import { AccommodationQuery } from './accommodation-search-form/accommodation-search-form.component';
import { AccommodationsResourceService, AccommodationOffer, Pageable } from '../../../api';

@Component({
  selector: 'app-accommodation-search',
  templateUrl: './accommodation-search.component.html',
  styleUrls: ['./accommodation-search.component.scss'],
})
export class AccommodationSearchComponent {
  results: AccommodationOffer[] = [];
  total?: number = undefined;
  loading = false;
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

  search(searchCriteria: AccommodationQuery) {
    this.loading = true;

    // TODO specify the params; at least sorting is configurable from the UI
    const pageRequest: Pageable = {
      // page?: number;
      // size?: number;
      // sort?: Array<string>;
    };

    const { location: { region, city } = {}, capacity } = searchCriteria;

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
