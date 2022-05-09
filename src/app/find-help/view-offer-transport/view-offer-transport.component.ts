import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TransportOffer, TransportResourceService } from '@app/core/api';
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
  redirectedFromAccount: boolean;
  originalAccountQueryParams?: Params;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private transportResourceService: TransportResourceService
  ) {
    // https://stackoverflow.com/questions/54891110/router-getcurrentnavigation-always-returns-null
    // in constructor, because null will be returned in ngOnInit
    this.redirectedFromAccount = !!this.router.getCurrentNavigation()?.extras?.state?.['redirectFromAccount'];
    this.originalAccountQueryParams = this.router.getCurrentNavigation()?.extras?.state?.['queryParams'];
  }

  ngOnInit(): void {
    this.offerId = Number(this.route.snapshot.paramMap.get('id'));
    this.getTransportOffer();
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
