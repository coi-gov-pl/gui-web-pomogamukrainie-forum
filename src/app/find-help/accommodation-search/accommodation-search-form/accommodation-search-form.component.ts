import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Location } from '@app/core/api';
import { StatementAnchors } from '@app/shared/models';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    if (Object.keys(this.route.snapshot.queryParams).length > 0) {
      const { capacity, city, region } = this.route.snapshot.queryParams;
      this.data = { capacity, location: city ? { city, region } : undefined };
    }
  }

  async onSubmit(): Promise<void> {
    await this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        page: 0,
        size: localStorage.getItem('size') ?? 5,
        capacity: this.data?.capacity,
        city: this.data.location?.city,
        region: this.data.location?.region,
      },
      queryParamsHandling: 'merge',
    });
    this.search.emit(this.data);
  }
}
