import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransportResourceService } from '@app/core/api';
import { TransportOffer } from '@app/core/api';
import { CategoryRoutingName } from '@app/shared/models';
import { defaults } from '@app/shared/utils';
import { CorePath } from '@app/shared/models';

@Component({
  selector: 'app-view-offer-transport',
  templateUrl: './view-offer-transport.component.html',
  styleUrls: ['./view-offer-transport.component.scss'],
})
export class ViewOfferTransportComponent implements OnInit {
  offerId: number = 0;
  data = defaults<TransportOffer>();
  categoryRouteName = CategoryRoutingName.TRANSPORT;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private transportResourceService: TransportResourceService
  ) {}

  ngOnInit(): void {
    this.offerId = Number(this.route.snapshot.paramMap.get('id'));
    this.getTransportOffer();
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

  getTransportOffer() {
    this.transportResourceService.getTransport(this.offerId).subscribe(
      (response) => {
        if (response == null) {
          this.router.navigate([CorePath.Find, CategoryRoutingName.TRANSPORT, CategoryRoutingName.NOT_FOUND]);
        }
        this.data = response;
      },
      (error) => {
        // TODO: with mock data, null was returned
        // make sure errors like 404 are properly handled
        // this.router.navigate([CorePath.Find, CategoryRoutingName.TRANSPORT, CategoryRoutingName.NOT_FOUND]);
      }
    );
  }
}
