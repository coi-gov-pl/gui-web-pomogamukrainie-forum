import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccommodationOffer, AccommodationsResourceService } from '@app/core/api';
import { CategoryRoutingName, CorePath } from '@app/shared/models';
import { defaults } from '@app/shared/utils';
import { StoreUrlService } from '@app/core/store-url';
import { UrlHelperService } from '@app/core/url';

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
  constructor(
    private route: ActivatedRoute,
    private accommodationsResourceService: AccommodationsResourceService,
    private router: Router,
    private storeUrlService: StoreUrlService,
    private urlHelperService: UrlHelperService
  ) {
    this.redirectedFromAccount = this.router.getCurrentNavigation()?.extras?.state!['redirectFromAccount'];
  }

  ngOnInit(): void {
    this.offerId = Number(this.route.snapshot.paramMap.get('id'));
    this.getAccomodationOffer();
  }

  copyUrl() {
    navigator.clipboard
      .writeText(this.urlHelperService.basePath(true) + this.router.url.substring(1))
      .then()
      .catch((e) => console.error(e));
  }

  navigateBack(): void {
    if (this.redirectedFromAccount) {
      this.router.navigate(['/', CorePath.MyAccount]);
    } else {
      this.router.navigate([this.router.url.replace(/\/[^/]+$/, '')], {
        queryParams: this.storeUrlService.getParams(this.categoryRouteName),
      });
    }
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
