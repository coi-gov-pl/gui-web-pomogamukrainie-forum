import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CategoryRoutingName, CorePath } from '@app/shared/models';
import { defaults } from '@app/shared/utils';
import { TranslationOffer } from '@app/core/api/model/translationOffer';
import { TranslationResourceService } from '@app/core/api';

@Component({
  selector: 'app-view-translations',
  templateUrl: './view-offer-translation.component.html',
  styleUrls: ['./view-offer-translation.component.scss'],
})
export class ViewOfferTranslationComponent implements OnInit {
  offerId: number = 0;
  data = defaults<TranslationOffer>();
  categoryRouteName = CategoryRoutingName.TRANSLATIONS;
  redirectedFromAccount: boolean;
  originalAccountQueryParams?: Params;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private translationResourceService: TranslationResourceService
  ) {
    // https://stackoverflow.com/questions/54891110/router-getcurrentnavigation-always-returns-null
    // in constructor, because null will be returned in ngOnInit
    this.redirectedFromAccount = !!this.router.getCurrentNavigation()?.extras?.state?.['redirectFromAccount'];
    this.originalAccountQueryParams = this.router.getCurrentNavigation()?.extras?.state?.['queryParams'];
  }

  ngOnInit(): void {
    this.offerId = Number(this.route.snapshot.paramMap.get('id'));
    this.getTranslationOffer();
  }

  getTranslationOffer() {
    this.translationResourceService.getTranslation(this.offerId).subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        this.router.navigate([CorePath.Find, CategoryRoutingName.TRANSLATIONS, CategoryRoutingName.NOT_FOUND]);
      }
    );
  }
}
