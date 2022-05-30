import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AccommodationQuery } from './accommodation-search-form/accommodation-search-form.component';
import {
  AccommodationsResourceService,
  AccommodationOfferVM,
  Pageable,
  AccommodationOfferSearchCriteria,
} from '@app/core/api';
import { CategoryRoutingName, CorePath } from '@app/shared/models';
import { ActivatedRoute } from '@angular/router';
import { MobileViewportDetectService } from '@app/shared/services';
import { defaults } from '@app/shared/utils';

@Component({
  selector: 'app-accommodation-search',
  templateUrl: './accommodation-search.component.html',
  styleUrls: ['./accommodation-search.component.scss'],
})
export class AccommodationSearchComponent implements OnInit {
  results: AccommodationOfferVM[] = [];
  total?: number = undefined;
  categoryRoutingName = CategoryRoutingName;
  corePath = CorePath;
  searchCriteria: AccommodationQuery = {};
  pagination: Pageable | undefined = {};
  @ViewChild('accomodationResultsStart', { read: ElementRef }) resultsStart!: ElementRef<HTMLElement>;

  constructor(
    private accommodationsResourceService: AccommodationsResourceService,
    private route: ActivatedRoute,
    private mobileViewportDetect: MobileViewportDetectService
  ) {}

  ngOnInit() {
    const { capacity, city, region } = this.route.snapshot.queryParams;
    const searchCriteria: AccommodationQuery = {
      capacity,
      location: {
        region,
        city,
      },
    };
    this.search(searchCriteria);
  }

  getResultsObservable(
    region: string | undefined,
    city: string | undefined,
    pageRequest: Pageable,
    capacity: number | undefined
  ) {
    const searchCriteria = defaults<AccommodationOfferSearchCriteria>();
    searchCriteria.capacity = capacity;
    if (region && city) {
      return this.accommodationsResourceService.listByLocationAccommodations(region, city, searchCriteria, pageRequest);
    } else {
      return this.accommodationsResourceService.listAccommodations(searchCriteria, pageRequest);
    }
  }

  search(searchCriteria?: AccommodationQuery) {
    const { page, size, sort } = this.route.snapshot.queryParams;
    if (searchCriteria) {
      this.searchCriteria.capacity = searchCriteria?.capacity;
      this.searchCriteria.location = searchCriteria?.location;
    }

    const pageRequest: Pageable = {
      page,
      size,
      sort,
    };

    const { location: { region, city } = {}, capacity } = this.searchCriteria;

    this.getResultsObservable(region, city, pageRequest, capacity).subscribe({
      next: (results) => {
        this.results = results.content ?? [];
        this.total = results.totalElements;
        if (this.mobileViewportDetect.isMobileView) {
          this.resultsStart?.nativeElement?.scrollIntoView();
        }
      },
      error: () => {
        this.results = [];
        this.total = undefined;
      },
    });
  }
}
