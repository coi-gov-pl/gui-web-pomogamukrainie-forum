import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pagable } from '../../api/pagable';
// import { Pageable, TransportOfferSearchCriteria, TransportResourceService, TransportOffer } from '../../../api';
import { MaterialSupportQuery } from './material-support-search-form/material-support-search-form.component';
import { Location } from '../../../api';

interface MaterialSupportOffer {
  id: number;
  title: string;
  description: string;
  category: string;
  location: Location;
  modifiedDate: Date;
}

@Component({
  selector: 'app-material-support-search',
  templateUrl: './material-support-search.component.html',
  styleUrls: ['./material-support-search.component.scss'],
})
export class MaterialSupportSearchComponent {
  results: MaterialSupportOffer[] = [];
  total?: number = undefined;
  loading = false;
  constructor(private http: HttpClient) {}

  search(query: MaterialSupportQuery) {
    this.loading = true;
    console.log(query);
    this.http
      .get<Pagable<MaterialSupportOffer>>(`/api/material-aid/`, {
        params: {},
      })
      .subscribe({
        next: (results) => {
          this.results = results.content;
          this.total = results.totalElements;
          this.loading = false;
        },
        error: () => {
          this.results = [];
          this.total = NaN;
          this.loading = false;
        },
      });
  }
}
