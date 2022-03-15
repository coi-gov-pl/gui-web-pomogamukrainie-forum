import { Component } from '@angular/core';
import { Pageable, TransportOfferSearchCriteria, TransportResourceService, TransportOffer } from '@app/core/api';
import { CategoryRoutingName } from '@app/shared/models';

@Component({
  selector: 'app-transport-search',
  templateUrl: './transport-search.component.html',
  styleUrls: ['./transport-search.component.scss'],
})
export class TransportSearchComponent {
  results: TransportOffer[] = [];
  total?: number = undefined;
  loading = false;
  CategoryRoutingName = CategoryRoutingName;
  constructor(private transportResourceService: TransportResourceService) {}

  search(searchCriteria: TransportOfferSearchCriteria) {
    this.loading = true;

    // TODO specify the params; at least sorting is configurable from the UI
    const pageRequest: Pageable = {
      // page?: number;
      // size?: number;
      // sort?: Array<string>;
    };

    this.transportResourceService.listTransport(pageRequest, searchCriteria).subscribe({
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
