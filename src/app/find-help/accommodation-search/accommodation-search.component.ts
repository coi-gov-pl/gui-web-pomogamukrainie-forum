import { Component } from '@angular/core';
import { AccommodationQuery } from './accommodation-search-form/accommodation-search-form.component';
import { AccommodationsResourceService, OffersAccommodationOffer, AccommodationOffer, Pageable } from '../../../api';
import { Observable } from 'rxjs';

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

  search(searchCriteria: AccommodationQuery) {
    this.loading = true;

    // TODO specify the params; at least sorting is configurable from the UI
    const pageRequest: Pageable = {
      // page?: number;
      // size?: number;
      // sort?: Array<string>;
    };

    let resultsObservable: Observable<OffersAccommodationOffer>;

    const { location: { region, city } = {}, capacity } = searchCriteria;

    if (region && city) {
      resultsObservable = this.accommodationsResourceService.listByLocationAccommodations(
        region,
        city,
        pageRequest,
        capacity
      );
    } else {
      resultsObservable = this.accommodationsResourceService.listAccommodations(pageRequest, capacity);
    }

    resultsObservable.subscribe({
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
