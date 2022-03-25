import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AccommodationOffer, AccommodationsResourceService } from '@app/core/api';
import { CategoryRoutingName, CorePath } from '@app/shared/models';
import { defaults } from '@app/shared/utils';
import { UrlHelperService } from '@app/core/url';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-view-offer-accommodation',
  templateUrl: './view-offer-accommodation.component.html',
  styleUrls: ['./view-offer-accommodation.component.scss'],
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
  constructor(
    private route: ActivatedRoute,
    private accommodationsResourceService: AccommodationsResourceService,
    private router: Router,
    private urlHelperService: UrlHelperService,
    private viewportScroller: ViewportScroller
  ) {
    // https://stackoverflow.com/questions/54891110/router-getcurrentnavigation-always-returns-null
    // in constructor, because null will be returned in ngOnInit
    this.redirectedFromAccount = !!this.router.getCurrentNavigation()?.extras?.state?.['redirectFromAccount'];
    this.originalAccountQueryParams = this.router.getCurrentNavigation()?.extras?.state?.['queryParams'];
  }

  ngOnInit(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
    this.offerId = Number(this.route.snapshot.paramMap.get('id'));
    this.getAccomodationOffer();
  }

  copyUrl() {
    navigator.clipboard
      .writeText(this.urlHelperService.basePath(true) + this.router.url.substring(1))
      .then()
      .catch((e) => console.error(e));
  }

  getAccomodationOffer() {
    this.accommodationsResourceService.getAccommodations(this.offerId).subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        this.router.navigate([CorePath.Find, CategoryRoutingName.ACCOMMODATION, CategoryRoutingName.NOT_FOUND]);
      }
    );
  }
}
