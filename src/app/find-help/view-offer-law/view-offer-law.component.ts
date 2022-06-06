import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { LawOfferVM, LawOfferSearchCriteria, LawResourceService, Pageable } from '@app/core/api';
import { CategoryRoutingName, CorePath, LangParam } from '@app/shared/models';
import { defaults, langParam } from '@app/shared/utils';
import { TranslateService } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-view-offer-law',
  templateUrl: './view-offer-law.component.html',
  styleUrls: ['./view-offer-law.component.scss'],
})
export class ViewOfferLawComponent implements OnInit, OnDestroy {
  private destroyed$: Subject<void> = new Subject<void>();
  offerId!: number;
  data = defaults<LawOfferVM>();
  categoryRouteName = CategoryRoutingName.LEGAL_HELP;
  redirectedFromAccount: boolean;
  originalAccountQueryParams?: Params;
  offerResults: LawOfferVM[] = [];
  activeOffer: LawOfferVM | undefined;
  activeIndex: number = 0;
  blurClass = '';
  searchCriteria = defaults<LawOfferSearchCriteria>();
  lang: LangParam;
  constructor(
    private route: ActivatedRoute,
    private lawResourceService: LawResourceService,
    private router: Router,
    private translateService: TranslateService
  ) {
    // https://stackoverflow.com/questions/54891110/router-getcurrentnavigation-always-returns-null
    // in constructor, because null will be returned in ngOnInit
    this.redirectedFromAccount = !!this.router.getCurrentNavigation()?.extras?.state?.['redirectFromAccount'];
    this.originalAccountQueryParams = this.router.getCurrentNavigation()?.extras?.state?.['queryParams'];

    this.lang = langParam(this.translateService.currentLang) as LangParam;
  }

  ngOnInit(): void {
    this.offerId = Number(this.route.snapshot.paramMap.get('id'));
    this.getLawOffer();
    this.getResults();

    this.translateService.onLangChange.pipe(takeUntil(this.destroyed$)).subscribe((params) => {
      this.lang = langParam(params.lang) as LangParam;
      this.getLawOffer();
      this.getResults();
    });
  }

  getLawOffer() {
    this.lawResourceService.getLaw(this.offerId, this.lang).subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        this.router.navigate([CorePath.Find, this.categoryRouteName, CategoryRoutingName.NOT_FOUND]);
      }
    );
  }

  getResults() {
    this.searchCriteria.lang = this.lang;
    this.searchCriteria.location = {
      region: this.originalAccountQueryParams?.['region'],
      city: this.originalAccountQueryParams?.['city'],
    };
    this.searchCriteria.helpKind = this.originalAccountQueryParams?.['helpKind'];
    this.searchCriteria.helpMode = this.originalAccountQueryParams?.['helpMode'];
    this.searchCriteria.language = this.originalAccountQueryParams?.['language'];
    const SORT = this.originalAccountQueryParams?.['sort']
      ? this.originalAccountQueryParams?.['sort']
      : 'modifiedDate,asc';
    const PAGEREQUEST: Pageable = {
      page: undefined,
      size: 999999999,
      sort: SORT,
    };

    this.lawResourceService.listLaw(PAGEREQUEST, this.searchCriteria).subscribe((results) => {
      this.offerResults = results.content ?? [];
      this.activeOffer = this.offerResults.find((x) => x.id === this.offerId);
      this.activeIndex = this.offerResults.findIndex((x) => x.id === this.offerId);
    });
  }

  slideOffer(index: number, direction: 'prev' | 'next') {
    this.blurAnimate();
    if (direction === 'prev') {
      const SLIDE_PREV_DATA: LawOfferVM = this.offerResults[index - 1];
      this.router.navigate([CorePath.Find, this.categoryRouteName, SLIDE_PREV_DATA.id]);
      this.activeIndex = index >= 0 ? index - 1 : index;
      this.offerId = SLIDE_PREV_DATA.id;
      this.data = SLIDE_PREV_DATA;
    } else {
      const SLIDE_NEXT_DATA: LawOfferVM = this.offerResults[index + 1];
      this.router.navigate([CorePath.Find, this.categoryRouteName, SLIDE_NEXT_DATA.id]);
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

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.unsubscribe();
  }
}
