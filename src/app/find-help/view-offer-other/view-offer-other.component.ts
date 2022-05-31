import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { OtherOfferVM, OtherResourceService, Pageable, OtherOfferSearchCriteria } from '@app/core/api';
import { CategoryRoutingName, CorePath } from '@app/shared/models';
import { defaults } from '@app/shared/utils';

@Component({
  selector: 'app-view-offer-other',
  templateUrl: './view-offer-other.component.html',
  styleUrls: ['./view-offer-other.component.scss'],
})
export class ViewOfferOtherComponent implements OnInit {
  offerId: number = 0;
  data = defaults<OtherOfferVM>();
  categoryRouteName = CategoryRoutingName.OTHER;
  redirectedFromAccount: boolean;
  originalAccountQueryParams?: Params;
  offerResults: OtherOfferVM[] = [];
  activeOffer: OtherOfferVM | undefined;
  activeIndex: number = 0;
  blurClass = '';
  searchCriteria = defaults<OtherOfferSearchCriteria>(); // TODO other search criteria
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private otherResourceService: OtherResourceService
  ) {
    // https://stackoverflow.com/questions/54891110/router-getcurrentnavigation-always-returns-null
    // in constructor, because null will be returned in ngOnInit
    this.redirectedFromAccount = !!this.router.getCurrentNavigation()?.extras?.state?.['redirectFromAccount'];
    this.originalAccountQueryParams = this.router.getCurrentNavigation()?.extras?.state?.['queryParams'];
  }

  ngOnInit(): void {
    this.offerId = Number(this.route.snapshot.paramMap.get('id'));
    this.getOtherOffer();
    this.getResults();
  }

  getOtherOffer() {
    this.otherResourceService.getOther(this.offerId).subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        this.router.navigate([CorePath.Find, this.categoryRouteName, CategoryRoutingName.NOT_FOUND]);
      }
    );
  }

  getResults() {
    this.searchCriteria.searchText = this.originalAccountQueryParams?.['searchText'];
    this.searchCriteria.location = this.originalAccountQueryParams?.['location'];
    const SORT = this.originalAccountQueryParams?.['sort']
      ? this.originalAccountQueryParams?.['sort']
      : 'modifiedDate,asc';
    const PAGEREQUEST: Pageable = {
      page: undefined,
      size: 999999999,
      sort: SORT,
    };

    this.otherResourceService.listOther(PAGEREQUEST, this.searchCriteria).subscribe((results) => {
      this.offerResults = results.content ?? [];
      this.activeOffer = this.offerResults.find((x) => x.id === this.offerId);
      this.activeIndex = this.offerResults.findIndex((x) => x.id === this.offerId);
    });
  }

  slideOffer(index: number, direction: 'prev' | 'next') {
    this.blurAnimate();
    if (direction === 'prev') {
      const SLIDE_PREV_DATA: OtherOfferVM = this.offerResults[index - 1];
      this.router.navigate([CorePath.Find, this.categoryRouteName, SLIDE_PREV_DATA.id]);
      this.activeIndex = index >= 0 ? index - 1 : index;
      this.offerId = SLIDE_PREV_DATA.id;
      this.data = SLIDE_PREV_DATA;
    } else {
      const SLIDE_NEXT_DATA: OtherOfferVM = this.offerResults[index + 1];
      this.router.navigate([CorePath.Find, this.categoryRouteName, SLIDE_NEXT_DATA.id]);
      this.activeIndex = index >= 0 ? index + 1 : index;
      this.offerId = SLIDE_NEXT_DATA.id;
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
