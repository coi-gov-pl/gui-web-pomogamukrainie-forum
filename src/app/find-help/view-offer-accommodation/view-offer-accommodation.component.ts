import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  offerId: number = 0;
  data = defaults<AccommodationOffer>();
  categoryRouteName = CategoryRoutingName.ACCOMMODATION;

  constructor(private route: ActivatedRoute, private accommodationsResourceService: AccommodationsResourceService) {}

  ngOnInit(): void {
    this.offerId = Number(this.route.snapshot.paramMap.get('id'));
    this.getAccomodationOffer();
  }

  getAccomodationOffer() {
    this.accommodationsResourceService.getAccommodations(this.offerId).subscribe((response) => {
      this.data = response;
    });
  }
}
