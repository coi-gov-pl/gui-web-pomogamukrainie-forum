import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AccommodationOffer, AccommodationsResourceService, Pageable } from '@app/core/api';
import { CategoryRoutingName, CorePath } from '@app/shared/models';
import { defaults } from '@app/shared/utils';

@Component({
  selector: 'app-view-offer-accommodation',
  templateUrl: './view-offer-accommodation.component.html',
  styleUrls: ['./view-offer-accommodation.component.scss'],
})
export class ViewOfferAccommodationComponent implements OnInit {
  offerId!: number;
  data = defaults<AccommodationOffer>();
  categoryRouteName = CategoryRoutingName.ACCOMMODATION;
  redirectedFromAccount: boolean;
  originalAccountQueryParams?: Params | undefined;
  offerResults: AccommodationOffer[] = [];
  activeOffer: AccommodationOffer | undefined;
  activeIndex: number = 0;
  blurClass = '';

  constructor(
    private route: ActivatedRoute,
    private accommodationsResourceService: AccommodationsResourceService,
    private router: Router
  ) {
    // https://stackoverflow.com/questions/54891110/router-getcurrentnavigation-always-returns-null
    // in constructor, because null will be returned in ngOnInit
    this.redirectedFromAccount = !!this.router.getCurrentNavigation()?.extras?.state?.['redirectFromAccount'];
    this.originalAccountQueryParams = this.router.getCurrentNavigation()?.extras?.state?.['queryParams'];
  }

  ngOnInit(): void {
    this.offerId = Number(this.route.snapshot.paramMap.get('id'));
    this.getAccomodationOffer(this.offerId);
    this.getResults();
  }

  getAccomodationOffer(id: number) {
    this.accommodationsResourceService.getAccommodations(id).subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        this.router.navigate([CorePath.Find, CategoryRoutingName.ACCOMMODATION, CategoryRoutingName.NOT_FOUND]);
      }
    );
  }

  getResults() {
    const CAPACITY = this.originalAccountQueryParams?.['capacity'];
    const REGION = this.originalAccountQueryParams?.['region'];
    const CITY = this.originalAccountQueryParams?.['city'];
    const PAGEREQUEST: Pageable = {
      page: undefined,
      size: 999999999,
      sort: undefined,
    };

    this.getResultsObservable(REGION, CITY, PAGEREQUEST, CAPACITY).subscribe((results) => {
      this.offerResults = results.content ?? [];
      this.activeOffer = this.offerResults.find((x) => x.id === this.offerId);
      this.activeIndex = this.offerResults.findIndex((x) => x.id === this.offerId);
    });
  }

  getResultsObservable(
    region: string | undefined,
    city: string | undefined,
    pageRequest: Pageable,
    capacity: number | undefined
  ) {
    if (region && city) {
      return this.accommodationsResourceService.listByLocationAccommodations(region, city, pageRequest, capacity);
    } else {
      return this.accommodationsResourceService.listAccommodations(pageRequest, capacity);
    }
  }

  slideOffer(index: number, direction: 'prev' | 'next') {
    this.blurAnimate();
    if (direction === 'prev') {
      const SLIDE_PREV_DATA: AccommodationOffer = this.offerResults[index - 1];
      this.router.navigate([CorePath.Find, CategoryRoutingName.ACCOMMODATION, SLIDE_PREV_DATA.id]);
      this.activeIndex = index >= 0 ? index - 1 : index;
      this.offerId = this.activeIndex;
      this.data = SLIDE_PREV_DATA;
    } else {
      const SLIDE_NEXT_DATA: AccommodationOffer = this.offerResults[index + 1];
      this.router.navigate([CorePath.Find, CategoryRoutingName.ACCOMMODATION, SLIDE_NEXT_DATA.id]);
      this.activeIndex = index >= 0 ? index + 1 : index;
      this.offerId = this.activeIndex;
      this.data = SLIDE_NEXT_DATA;
    }
  }

  blurAnimate() {
    this.blurClass = 'blurClass';
    setTimeout(() => {
      this.blurClass = '';
    }, 300);
  }
}
