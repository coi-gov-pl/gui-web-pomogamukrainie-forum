import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { TransportOfferSearchCriteria } from '@app/core/api';
import { CorePath } from '@app/shared/models';
import { StatementAnchors } from '@app/shared/models';
import { ActivatedRoute, Router } from '@angular/router';
import { StoreUrlService } from '@app/core/store-url';
import { LocalStorage } from '@app/shared/models';

@Component({
  selector: 'app-transport-search-form',
  templateUrl: './transport-search-form.component.html',
  styleUrls: ['./transport-search-form.component.scss'],
})
export class TransportSearchFormComponent implements OnInit {
  data: TransportOfferSearchCriteria = {};

  @Output()
  search = new EventEmitter<TransportOfferSearchCriteria>();
  corePath = CorePath;
  statementAnchor: string = StatementAnchors.TRANSPORT;

  constructor(private router: Router, private route: ActivatedRoute, private storeUrlService: StoreUrlService) {}

  ngOnInit() {
    if (Object.keys(this.route.snapshot.queryParams).length > 0) {
      const { capacity, transportDate, originCity, originRegion, destinationCity, destinationRegion } =
        this.route.snapshot.queryParams;
      this.data = {
        capacity,
        transportDate,
        origin: originCity ? { region: originRegion, city: originCity } : undefined,
        destination: destinationCity ? { region: destinationRegion, city: destinationCity } : undefined,
      };
    }
  }

  async onSubmit(): Promise<void> {
    const param = {
      page: 0,
      size: localStorage.getItem(LocalStorage.PageSize) ?? 5,
      capacity: this.data?.capacity,
      transportDate: this.data.transportDate,
      destinationRegion: this.data.destination?.region,
      destinationCity: this.data.destination?.city,
      originRegion: this.data.origin?.region,
      originCity: this.data.origin?.city,
    };
    await this.storeUrlService.setCustomPaginatorParam(param);
    this.search.emit(this.data);
  }
}
