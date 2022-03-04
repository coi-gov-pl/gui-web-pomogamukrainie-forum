import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AccommodationQuery } from './accommodation-search-form/accommodation-search-form.component';
import { Pagable } from '../../api/pagable';

interface AccommodationOffer {
  id: number;
  title: string;
  description: string;
  location: {};
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
  constructor(private http: HttpClient) {}

  search(query: AccommodationQuery) {
    this.total = NaN;
    this.results = [];
    this.http
      .get<Pagable<AccommodationOffer>>('/api/accommodations', {
        params: {
          ...query,
        },
      })
      .subscribe((results) => {
        this.results = results.content;
        this.total = results.totalElements;
      });
  }
}
