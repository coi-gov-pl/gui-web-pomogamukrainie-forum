import { Component } from '@angular/core';
import { Pageable, TransportOfferSearchCriteria, TransportResourceService, TransportOffer } from '@app/core/api';
import { CategoryRoutingName, CorePath } from '@app/shared/models';

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
  corePath = CorePath;
  searchCriteria: TransportOfferSearchCriteria = {};
  pagination: Pageable | undefined;
  constructor(private transportResourceService: TransportResourceService) {}

  search(searchCriteria?: TransportOfferSearchCriteria, pagination?: Pageable) {
    this.loading = true;

    this.searchCriteria.origin = searchCriteria?.origin || this.searchCriteria.origin;
    this.searchCriteria.destination = searchCriteria?.destination || this.searchCriteria.destination;
    this.searchCriteria.capacity = searchCriteria?.capacity || this.searchCriteria.capacity;
    this.searchCriteria.transportDate = searchCriteria?.transportDate || this.searchCriteria.transportDate;
    this.pagination = pagination || this.pagination;

    const pageRequest: Pageable = {
      page: pagination?.page,
      size: this.pagination?.size,
      sort: pagination?.sort,
    };

    this.transportResourceService.listTransport(pageRequest, this.searchCriteria).subscribe({
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
