import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AccommodationQuery } from './accommodation-search-form/accommodation-search-form.component';
import { Pagable } from '../../api/pagable';
import { Location } from '../../../api';

interface AccommodationOffer {
  id: number;
  title: string;
  description: string;
  location: Location;
  guests: number;
  lengthOfStay: string;
  hostLanguage: string[];
}
@Component({
  selector: 'app-accommodation-search',
  templateUrl: './accommodation-search.component.html',
  styleUrls: ['./accommodation-search.component.scss'],
})
export class AccommodationSearchComponent {
  results: AccommodationOffer[] = [];
  total: number = NaN;
  loading = false;
  constructor(private http: HttpClient) {}

  search(query: AccommodationQuery) {
    this.loading = true;
    console.log(query);
    this.http
      .get<Pagable<AccommodationOffer>>(
        `/api/accommodations/` + (query.location ? `${query.location.region}/${query.location.city}` : ''),
        {
          params: query.guests ? { capacity: query.guests } : {},
        }
      )
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
