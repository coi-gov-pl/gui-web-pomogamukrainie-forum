import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pageable, TransportOfferSearchCriteria, TransportResourceService, TransportOffer } from '../../../api';

@Component({
  selector: 'app-transport-search',
  templateUrl: './transport-search.component.html',
  styleUrls: ['./transport-search.component.scss'],
})
export class TransportSearchComponent {
  results: TransportOffer[] = [];
  total?: number = undefined;
  loading = false;
  constructor(private http: HttpClient, private transportResourceService: TransportResourceService) {}

  search(searchCriteria: TransportOfferSearchCriteria) {
    this.loading = true;

    const pageRequest: Pageable = {
      // page?: number;
      // size?: number;
      // sort?: Array<string>;
    };

    // TODO a proper request
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
