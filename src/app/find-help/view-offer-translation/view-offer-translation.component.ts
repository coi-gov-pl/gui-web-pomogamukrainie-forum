import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CategoryRoutingName, CorePath } from '@app/shared/models';
import { defaults } from '@app/shared/utils';
import { TranslationOffer } from '@app/core/api/model/translationOffer';
import { Pageable, TranslationResourceService } from '@app/core/api';
import { TranslationOfferSearchCriteria } from '../../core/api/model/translationOfferSearchCriteria';

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
  offerResults: TranslationOffer[] = [];
  activeOffer: TranslationOffer | undefined;
  activeIndex: number = 0;
  blurClass = '';
  searchCriteria = defaults<TranslationOfferSearchCriteria>();

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
    this.getResults();
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

  getResults() {
    this.searchCriteria.location = this.originalAccountQueryParams?.['location'];
    this.searchCriteria.language = this.originalAccountQueryParams?.['language'];
    this.searchCriteria.mode = this.originalAccountQueryParams?.['mode'];

    const PAGEREQUEST: Pageable = {
      page: undefined,
      size: 999999999,
      sort: undefined,
    };

    this.translationResourceService.listTranslation(PAGEREQUEST, this.searchCriteria).subscribe((results) => {
      this.offerResults = results.content ?? [];
      this.activeOffer = this.offerResults.find((x) => x.id === this.offerId);
      this.activeIndex = this.offerResults.findIndex((x) => x.id === this.offerId);
    });
  }

  slideOffer(index: number, direction: 'prev' | 'next') {
    this.blurAnimate();
    if (direction === 'prev') {
      const SLIDE_PREV_DATA: TranslationOffer = this.offerResults[index - 1];
      this.router.navigate([CorePath.Find, CategoryRoutingName.ACCOMMODATION, SLIDE_PREV_DATA.id]);
      this.activeIndex = index >= 0 ? index - 1 : index;
      this.offerId = SLIDE_PREV_DATA.id;
      this.data = SLIDE_PREV_DATA;
    } else {
      const SLIDE_NEXT_DATA: TranslationOffer = this.offerResults[index + 1];
      this.router.navigate([CorePath.Find, CategoryRoutingName.ACCOMMODATION, SLIDE_NEXT_DATA.id]);
      this.activeIndex = index >= 0 ? index + 1 : index;
      this.offerId = SLIDE_NEXT_DATA.id;
      this.data = SLIDE_NEXT_DATA;
    }
  }

  blurAnimate() {
    this.blurClass = 'blurClass';
    setTimeout(() => {
      this.blurClass = '';
    }, 300);
  }
}
