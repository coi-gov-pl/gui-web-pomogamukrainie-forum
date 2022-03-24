import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransportOffer, TransportResourceService } from '@app/core/api';
import { CategoryRoutingName } from '@app/shared/models';
import { defaults } from '@app/shared/utils';
import { CorePath } from '@app/shared/models';
import { UrlHelperService } from '@app/core/url';

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
    private urlHelperService: UrlHelperService
  ) {
    // https://stackoverflow.com/questions/54891110/router-getcurrentnavigation-always-returns-null
    // in constructor, because null will be returned in ngOnInit
    this.redirectedFromAccount = !!this.router.getCurrentNavigation()?.extras?.state?.['redirectFromAccount'];
  }

  ngOnInit(): void {
    this.offerId = Number(this.route.snapshot.paramMap.get('id'));
    this.getTransportOffer();
  }

  copyUrl() {
    navigator.clipboard
      .writeText(this.urlHelperService.basePath(true) + this.router.url.substring(1))
      .then()
      .catch((e) => console.error(e));
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
