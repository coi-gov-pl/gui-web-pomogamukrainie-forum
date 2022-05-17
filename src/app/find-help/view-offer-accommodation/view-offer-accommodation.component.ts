import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AccommodationOffer, AccommodationsResourceService, Pageable } from '@app/core/api';
import { CategoryRoutingName, CorePath } from '@app/shared/models';
import { defaults } from '@app/shared/utils';
import { AccommodationQuery } from '../accommodation-search/accommodation-search-form/accommodation-search-form.component';
import { OffersAccommodationOffer } from '@app/core/api';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-view-offer-accommodation',
  templateUrl: './view-offer-accommodation.component.html',
  styleUrls: ['./view-offer-accommodation.component.scss'],
  animations: [
    // Each unique animation requires its own trigger. The first argument of the trigger function is the name
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0)' })),
      state('rotated', style({ transform: 'rotate(-360deg)' })),
      transition('rotated => default', animate('400ms ease-out')),
      transition('default => rotated', animate('400ms ease-out')),
    ]),
  ],
})
export class ViewOfferAccommodationComponent implements OnInit {
  offerId!: number;
  data = defaults<AccommodationOffer>();
  categoryRouteName = CategoryRoutingName.ACCOMMODATION;
  centered = false;
  disabled = false;
  unbounded = false;
  radius!: number;
  color!: string;
  redirectedFromAccount: boolean;
  originalAccountQueryParams?: Params;
  offerResults: AccommodationOffer[] = [];
  activeOffer: AccommodationOffer | undefined;
  nextOffer: AccommodationOffer | undefined;
  accomodationAllResults: AccommodationOffer[] = [];
  searchCriteria: AccommodationQuery = {};
  total?: number = undefined;
  activeIndex: number = 0;
  state: string = 'default';
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
    console.log('ngOnInit');

    this.offerId = Number(this.route.snapshot.paramMap.get('id'));
    this.getAccomodationOffer(this.offerId);
    // const { capacity, city, region } = this.route.snapshot.queryParams;
    // const searchCriteria: AccommodationQuery = {
    //   capacity,
    //   location: {
    //     region,
    //     city,
    //   },
    // };
    this.initAllResults();
    console.log('accomodationAllResults', this.accomodationAllResults);
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

  initAllResults() {
    // const { page, size, sort } = this.route.snapshot.queryParams;
    // if (searchCriteria) {
    //   this.searchCriteria.capacity = searchCriteria?.capacity;
    //   this.searchCriteria.location = searchCriteria?.location;
    // }

    const pageRequest: Pageable = {
      page: undefined,
      size: 999999999,
      sort: undefined,
    };

    // const { location: { region, city } = {}, capacity } = this.searchCriteria;
    this.accommodationsResourceService
      .listAccommodations(pageRequest, undefined)
      // this.getResultsObservable(undefined, undefined, pageRequest, undefined)
      .subscribe({
        next: (results) => {
          this.offerResults = results.content ?? [];
          this.total = results.totalElements;
          console.log('this.offerResults', this.offerResults);
          this.activeOffer = this.offerResults.find((x) => x.id === this.offerId);
          this.activeIndex = this.offerResults.findIndex((x) => x.id === this.offerId);
          console.log('this.activeOffer', this.activeOffer);
          // console.log('this.index', this.activeIndex);
        },
        error: () => {
          this.offerResults = [];
          this.total = undefined;
        },
      });
    // this.activeOffer = this.offerResults.find((x) => x.id === this.offerId);

    // this.offerResults.map((x) => x.id === this.offerId);
  }

  slideOffer(index: number, direction: 'prev' | 'next') {
    console.log(index, direction);

    if (direction === 'prev') {
      // this.getAccomodationOffer(this.offerId);
      const SLIDE_PREV_DATA: AccommodationOffer = this.offerResults[index - 1];
      this.router.navigate([CorePath.Find, CategoryRoutingName.ACCOMMODATION, SLIDE_PREV_DATA.id]);
      this.activeIndex = index >= 0 ? index - 1 : index;
      this.offerId = this.activeIndex;
      this.data = SLIDE_PREV_DATA;
      // this.router.navigate([CorePath.Find, CategoryRoutingName.ACCOMMODATION, SLIDE_PREV_ID]).then((page) => {
      //   window.location.reload();
      // });
    } else {
      const SLIDE_NEXT_DATA: AccommodationOffer = this.offerResults[index + 1];
      this.router.navigate([CorePath.Find, CategoryRoutingName.ACCOMMODATION, SLIDE_NEXT_DATA.id]);
      this.activeIndex = index >= 0 ? index + 1 : index;
      this.offerId = this.activeIndex;
      this.data = SLIDE_NEXT_DATA;
      // this.router.navigate([CorePath.Find, CategoryRoutingName.ACCOMMODATION, SLIDE_NEXT_ID]).then((page) => {
      //   window.location.reload();
      // });
    }
    console.log('this.index', this.activeIndex);
  }

  rotate() {
    // this.state = this.state === 'default' ? 'rotated' : 'default';
    this.blurClass = 'blurClass';
    setTimeout(() => {
      this.blurClass = '';
    }, 300);
  }
}
