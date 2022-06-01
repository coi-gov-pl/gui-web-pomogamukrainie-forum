import { Component, OnDestroy, OnInit } from '@angular/core';
import { defaults, langParam } from '@app/shared/utils';
import { CategoryRoutingName, CorePath, LangParam } from '@app/shared/models';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { JobOfferVM, JobResourceService, Pageable } from '@app/core/api';
import { JobOfferSearchCriteria } from '@app/core/api/model/jobOfferSearchCriteria';
import { TranslateService } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-view-offer-job',
  templateUrl: './view-offer-job.component.html',
  styleUrls: ['./view-offer-job.component.scss'],
})
export class ViewOfferJobComponent implements OnInit, OnDestroy {
  private destroyed$: Subject<void> = new Subject<void>();
  offerId!: number;
  data = defaults<JobOfferVM>();
  categoryRouteName = CategoryRoutingName.JOB;
  redirectedFromAccount: boolean;
  originalAccountQueryParams?: Params;
  offerResults: JobOfferVM[] = [];
  activeOffer: JobOfferVM | undefined;
  activeIndex: number = 0;
  blurClass = '';
  searchCriteria = defaults<JobOfferSearchCriteria>();
  lang: LangParam;

  constructor(
    private route: ActivatedRoute,
    private jobsResourceService: JobResourceService,
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
    this.getJobOffer();
    this.getResults();

    this.translateService.onLangChange.pipe(takeUntil(this.destroyed$)).subscribe((params) => {
      this.lang = langParam(params.lang) as LangParam;
      this.getJobOffer();
      this.getResults();
    });
  }

  getJobOffer() {
    this.jobsResourceService.getJob(this.offerId, this.lang).subscribe(
      (response) => {
        this.data = response;
      },
      () => {
        this.router.navigate([CorePath.Find, this.categoryRouteName, CategoryRoutingName.NOT_FOUND]);
      }
    );
  }

  getResults() {
    this.searchCriteria.lang = this.lang;
    this.searchCriteria.industry = this.originalAccountQueryParams?.['industry'];
    this.searchCriteria.mode = this.originalAccountQueryParams?.['mode'];
    this.searchCriteria.contractType = this.originalAccountQueryParams?.['contractType'];
    this.searchCriteria.workTime = this.originalAccountQueryParams?.['workTime'];
    this.searchCriteria.language = this.originalAccountQueryParams?.['language'];
    this.searchCriteria.location = this.originalAccountQueryParams?.['location'];
    const SORT = this.originalAccountQueryParams?.['sort']
      ? this.originalAccountQueryParams?.['sort']
      : 'modifiedDate,asc';
    const PAGEREQUEST: Pageable = {
      page: undefined,
      size: 999999999,
      sort: SORT,
    };

    this.jobsResourceService.listJob(PAGEREQUEST, this.searchCriteria).subscribe((results) => {
      this.offerResults = results.content ?? [];
      this.activeOffer = this.offerResults.find((x) => x.id === this.offerId);
      this.activeIndex = this.offerResults.findIndex((x) => x.id === this.offerId);
    });
  }

  slideOffer(index: number, direction: 'prev' | 'next') {
    this.blurAnimate();
    if (direction === 'prev') {
      const SLIDE_PREV_DATA: JobOfferVM = this.offerResults[index - 1];
      this.router.navigate([CorePath.Find, this.categoryRouteName, SLIDE_PREV_DATA.id]);
      this.activeIndex = index >= 0 ? index - 1 : index;
      this.offerId = SLIDE_PREV_DATA.id;
      this.data = SLIDE_PREV_DATA;
    } else {
      const SLIDE_NEXT_DATA: JobOfferVM = this.offerResults[index + 1];
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
