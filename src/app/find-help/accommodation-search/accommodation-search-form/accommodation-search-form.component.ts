import { Component, EventEmitter, Output } from '@angular/core';

export interface AccommodationQuery {
  location?: {
    city: string;
    region: string;
  };
  guests?: number;
}

@Component({
  selector: 'app-accommodation-search-form',
  templateUrl: './accommodation-search-form.component.html',
  styleUrls: ['./accommodation-search-form.component.scss'],
})
export class AccommodationSearchFormComponent {
  data: AccommodationQuery = {};
  @Output()
  search = new EventEmitter<AccommodationQuery>();
}
