import { Component, Input, OnInit } from '@angular/core';
import { AccommodationsResourceService, TransportResourceService, MaterialAidResourceService } from '@app/core/api';
import { MaterialAidOffer, TransportOffer, AccommodationOffer } from '@app/core/api';
import { CategoryRoutingName } from '@app/shared/models';
import { defaults } from '@app/shared/utils';

@Component({
  selector: 'app-view-offer-accommodation',
  templateUrl: './view-offer-accommodation.component.html',
  styleUrls: ['./view-offer-accommodation.component.scss'],
})
export class ViewOfferAccommodationComponent implements OnInit {
  @Input() offerId: number = 3;
  @Input() category!: CategoryRoutingName;
  accomodationOfferData = defaults<AccommodationOffer>();
  materialaidOfferData = defaults<MaterialAidOffer>();
  transportOfferData = defaults<TransportOffer>();
  CategoryRoutingName = CategoryRoutingName;
  constructor(
    private accommodationsResourceService: AccommodationsResourceService,
    private transportResourceService: TransportResourceService,
    private materialAidResourceService: MaterialAidResourceService
  ) {}

  ngOnInit(): void {
    if (this.category === CategoryRoutingName.ACCOMMODATION) {
      this.getAccomodationOffer();
    } else if (this.category === CategoryRoutingName.MATERIAL_HELP) {
      this.getMaterialAidOffer();
    } else if (this.category === CategoryRoutingName.TRANSPORT) {
      this.getTransportOffer();
    }
  }

  getAccomodationOffer() {
    this.accommodationsResourceService.getAccommodations(this.offerId).subscribe((response) => {
      this.accomodationOfferData = response;
    });
  }

  getMaterialAidOffer() {
    this.materialAidResourceService.getMaterialAid(this.offerId).subscribe((response) => {
      this.materialaidOfferData = response;
    });
  }

  getTransportOffer() {
    this.transportResourceService.getTransport(this.offerId).subscribe((response) => {
      this.transportOfferData = response;
    });
  }
}
