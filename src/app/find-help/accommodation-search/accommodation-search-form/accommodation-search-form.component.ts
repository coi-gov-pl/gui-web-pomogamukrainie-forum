import { Component, EventEmitter, Output } from '@angular/core';
import { Location } from '@app/core/api';
import { StatementAnchors } from '@app/shared/models';

export interface AccommodationQuery {
  location?: Location;
  capacity?: number;
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
  statementAnchor: string = StatementAnchors.ACCOMMODATION;
}
