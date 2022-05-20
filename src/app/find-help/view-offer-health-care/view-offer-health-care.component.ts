import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CategoryRoutingName } from '@app/shared/models';
import { defaults } from '@app/shared/utils';
import { CorePath } from '@app/shared/models';
import { HealthOffer } from '../../core/api/model/healthOffer';
import { HealthResourceService } from '../../core/api/api/healthResource.service';
import { HealthOfferSearchCriteria, Pageable } from '@app/core/api';

@Component({
  selector: 'app-view-offer-health-care',
  templateUrl: './view-offer-health-care.component.html',
  styleUrls: ['./view-offer-health-care.component.scss'],
})
export class ViewOfferHealthCareComponent implements OnInit {
  offerId: number = 0;
  data = defaults<HealthOffer>();
  categoryRouteName = CategoryRoutingName.HEALTH;
  redirectedFromAccount: boolean;
  originalAccountQueryParams?: Params | undefined;
  offerResults: HealthOffer[] = [];
  activeOffer: HealthOffer | undefined;
  activeIndex: number = 0;
  blurClass = '';
  searchCriteria = defaults<HealthOfferSearchCriteria>();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private healthResourceService: HealthResourceService
  ) {
    // https://stackoverflow.com/questions/54891110/router-getcurrentnavigation-always-returns-null
    // in constructor, because null will be returned in ngOnInit
    this.redirectedFromAccount = !!this.router.getCurrentNavigation()?.extras?.state?.['redirectFromAccount'];
    this.originalAccountQueryParams = this.router.getCurrentNavigation()?.extras?.state?.['queryParams'];
  }

  ngOnInit(): void {
    this.offerId = Number(this.route.snapshot.paramMap.get('id'));
    this.getTransportOffer();
    this.getResults();
  }

  getTransportOffer() {
    this.healthResourceService.getHealth(this.offerId).subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        this.router.navigate([CorePath.Find, CategoryRoutingName.HEALTH, CategoryRoutingName.NOT_FOUND]);
      }
    );
  }

  getResults() {
    this.searchCriteria.location = this.originalAccountQueryParams?.['location'];
    this.searchCriteria.specialization = this.originalAccountQueryParams?.['specialization'];
    this.searchCriteria.language = this.originalAccountQueryParams?.['language'];
    this.searchCriteria.mode = this.originalAccountQueryParams?.['mode'];

    const PAGEREQUEST: Pageable = {
      page: undefined,
      size: 999999999,
      sort: undefined,
    };

    this.healthResourceService.listHealth(PAGEREQUEST, this.searchCriteria).subscribe((results) => {
      this.offerResults = results.content ?? [];
      this.activeOffer = this.offerResults.find((x) => x.id === this.offerId);
      this.activeIndex = this.offerResults.findIndex((x) => x.id === this.offerId);
    });
  }

  slideOffer(index: number, direction: 'prev' | 'next') {
    this.blurAnimate();
    if (direction === 'prev') {
      const SLIDE_PREV_DATA: HealthOffer = this.offerResults[index - 1];
      this.router.navigate([CorePath.Find, CategoryRoutingName.ACCOMMODATION, SLIDE_PREV_DATA.id]);
      this.activeIndex = index >= 0 ? index - 1 : index;
      this.offerId = SLIDE_PREV_DATA.id;
      this.data = SLIDE_PREV_DATA;
    } else {
      const SLIDE_NEXT_DATA: HealthOffer = this.offerResults[index + 1];
      this.router.navigate([CorePath.Find, CategoryRoutingName.ACCOMMODATION, SLIDE_NEXT_DATA.id]);
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
