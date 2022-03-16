import { Component, Output, EventEmitter } from '@angular/core';
import { TransportOfferSearchCriteria } from '@app/core/api';
import { CorePath } from '@app/shared/models';

@Component({
  selector: 'app-transport-search-form',
  templateUrl: './transport-search-form.component.html',
  styleUrls: ['./transport-search-form.component.scss'],
})
export class TransportSearchFormComponent {
  data: TransportOfferSearchCriteria = {};

  @Output()
  search = new EventEmitter<TransportOfferSearchCriteria>();
  corePath = CorePath;
}
