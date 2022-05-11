import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CategoryRoutingName } from '@app/shared/models';
import { defaults } from '@app/shared/utils';
import { CorePath } from '@app/shared/models';
import { HealthOffer } from '../../core/api/model/healthOffer';
import { HealthResourceService } from '../../core/api/api/healthResource.service';

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
  originalAccountQueryParams?: Params;
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
}
