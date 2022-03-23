import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransportOffer, TransportResourceService } from '@app/core/api';
import { CategoryRoutingName } from '@app/shared/models';
import { defaults } from '@app/shared/utils';
import { CorePath } from '@app/shared/models';
import { StoreUrlService } from '@app/core/store-url/store-url.service';

@Component({
  selector: 'app-view-offer-transport',
  templateUrl: './view-offer-transport.component.html',
  styleUrls: ['./view-offer-transport.component.scss'],
})
export class ViewOfferTransportComponent implements OnInit {
  offerId: number = 0;
  data = defaults<TransportOffer>();
  categoryRouteName = CategoryRoutingName.TRANSPORT;
  redirectedFromAccount: boolean;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private transportResourceService: TransportResourceService,
    private storeUrlService: StoreUrlService
  ) {
    this.redirectedFromAccount = this.router.getCurrentNavigation()?.extras?.state!['redirectFromAccount'];
  }

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

  navigateBack(): void {
    if (this.redirectedFromAccount) {
      this.router.navigate(['/', CorePath.MyAccount]);
    } else {
      this.router.navigate([this.router.url.replace(/\/[^/]+$/, '')], {
        queryParams: this.storeUrlService.getParams(this.categoryRouteName),
      });
    }
  }

  getTransportOffer() {
    this.transportResourceService.getTransport(this.offerId).subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        this.router.navigate([CorePath.Find, CategoryRoutingName.TRANSPORT, CategoryRoutingName.NOT_FOUND]);
      }
    );
  }
}
