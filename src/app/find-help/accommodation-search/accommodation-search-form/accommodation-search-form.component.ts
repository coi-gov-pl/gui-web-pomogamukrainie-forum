import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Location } from '@app/core/api';
import { StatementAnchors } from '@app/shared/models';
import { ActivatedRoute, Router } from '@angular/router';
import { StoreUrlService } from '@app/core/store-url/store-url.service';

export interface AccommodationQuery {
  location?: Location;
  capacity?: number;
}

@Component({
  selector: 'app-accommodation-search-form',
  templateUrl: './accommodation-search-form.component.html',
  styleUrls: ['./accommodation-search-form.component.scss'],
})
export class AccommodationSearchFormComponent implements OnInit {
  data: AccommodationQuery = {};
  @Output()
  search = new EventEmitter<AccommodationQuery>();
  statementAnchor: string = StatementAnchors.ACCOMMODATION;

  constructor(private router: Router, private route: ActivatedRoute, private storeUrlService: StoreUrlService) {}

  ngOnInit() {
    if (Object.keys(this.route.snapshot.queryParams).length > 0) {
      const { capacity, city, region } = this.route.snapshot.queryParams;
      this.data = { capacity, location: city ? { city, region } : undefined };
    }
  }

  async onSubmit(): Promise<void> {
    await this.storeUrlService.setDefaultPaginatorParam();
    this.search.emit(this.data);
  }
}
