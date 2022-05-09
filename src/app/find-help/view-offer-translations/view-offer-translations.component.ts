import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CategoryRoutingName, CorePath } from '@app/shared/models';
import { defaults } from '@app/shared/utils';
import { UrlHelperService } from '@app/core/url';
import { TranslationsOffer } from '../translations-search/translations-search-form/translations-search-form.component';
import { TranslationsResourceService } from '@app/core/api/api/translationsResource.service';

@Component({
  selector: 'app-view-translations',
  templateUrl: './view-offer-translations.component.html',
  styleUrls: ['./view-offer-translations.component.scss'],
})
export class ViewOfferTranslationsComponent implements OnInit {
  offerId: number = 0;
  data = defaults<TranslationsOffer>();
  categoryRouteName = CategoryRoutingName.TRANSLATIONS;
  redirectedFromAccount: boolean;
  originalAccountQueryParams?: Params;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private translationsResourceService: TranslationsResourceService,
    private urlHelperService: UrlHelperService
  ) {
    // https://stackoverflow.com/questions/54891110/router-getcurrentnavigation-always-returns-null
    // in constructor, because null will be returned in ngOnInit
    this.redirectedFromAccount = !!this.router.getCurrentNavigation()?.extras?.state?.['redirectFromAccount'];
    this.originalAccountQueryParams = this.router.getCurrentNavigation()?.extras?.state?.['queryParams'];
  }

  ngOnInit(): void {
    this.offerId = Number(this.route.snapshot.paramMap.get('id'));
    this.getTranslationsOffer();
  }

  copyUrl() {
    navigator.clipboard
      .writeText(this.urlHelperService.basePath(true) + this.router.url.substring(1))
      .then()
      .catch((e) => console.error(e));
  }

  getTranslationsOffer() {
    this.translationsResourceService.getTranslation(this.offerId).subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        this.router.navigate([CorePath.Find, CategoryRoutingName.TRANSLATIONS, CategoryRoutingName.NOT_FOUND]);
      }
    );
  }
}
