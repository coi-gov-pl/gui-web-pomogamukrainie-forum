import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { LawOffer, LawResourceService } from '@app/core/api';
import { CategoryRoutingName, CorePath } from '@app/shared/models';
import { defaults } from '@app/shared/utils';
import { UrlHelperService } from '@app/core/url';

@Component({
  selector: 'app-view-offer-law',
  templateUrl: './view-offer-law.component.html',
  styleUrls: ['./view-offer-law.component.scss'],
})
export class ViewOfferLawComponent implements OnInit {
  offerId!: number;
  data = defaults<LawOffer>();
  categoryRouteName = CategoryRoutingName.LEGAL_HELP;
  redirectedFromAccount: boolean;
  originalAccountQueryParams?: Params;
  constructor(
    private route: ActivatedRoute,
    private lawResourceService: LawResourceService,
    private router: Router,
    private urlHelperService: UrlHelperService
  ) {
    // https://stackoverflow.com/questions/54891110/router-getcurrentnavigation-always-returns-null
    // in constructor, because null will be returned in ngOnInit
    this.redirectedFromAccount = !!this.router.getCurrentNavigation()?.extras?.state?.['redirectFromAccount'];
    this.originalAccountQueryParams = this.router.getCurrentNavigation()?.extras?.state?.['queryParams'];
  }

  ngOnInit(): void {
    this.offerId = Number(this.route.snapshot.paramMap.get('id'));
    this.getLawOffer();
  }

  copyUrl() {
    navigator.clipboard
      .writeText(this.urlHelperService.basePath(true) + this.router.url.substring(1))
      .then()
      .catch((e) => console.error(e));
  }

  getLawOffer() {
    this.lawResourceService.getLaw(this.offerId).subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        this.router.navigate([CorePath.Find, CategoryRoutingName.LEGAL_HELP, CategoryRoutingName.NOT_FOUND]);
      }
    );
  }
}
