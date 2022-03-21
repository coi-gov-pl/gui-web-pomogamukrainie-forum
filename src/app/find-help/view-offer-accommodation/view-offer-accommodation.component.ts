import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccommodationsResourceService } from '@app/core/api';
import { AccommodationOffer } from '@app/core/api';
import { CategoryRoutingName } from '@app/shared/models';
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
  centered = false;
  disabled = false;
  unbounded = false;
  radius!: number;
  color!: string;
  constructor(
    private route: ActivatedRoute,
    private accommodationsResourceService: AccommodationsResourceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.offerId = Number(this.route.snapshot.paramMap.get('id'));
    this.getAccomodationOffer();
  }

  copyUrl() {
    navigator.clipboard
      .writeText(this.router.url)
      .then()
      .catch((e) => console.error(e));
  }

  getListUrl(): string {
    return this.router.url.replace(/\/[^/]+$/, '');
  }

  getAccomodationOffer() {
    this.accommodationsResourceService.getAccommodations(this.offerId).subscribe((response) => {
      this.data = response;
    });
  }
}
