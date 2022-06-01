import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { JobOfferSearchCriteria, JobOfferVM, JobResourceService, Pageable } from '@app/core/api';
import { CategoryRoutingName, CorePath } from '@app/shared/models';
import { ActivatedRoute } from '@angular/router';
import { JobQuery } from './job-search-form/job-search-form.component';
import { MobileViewportDetectService } from '@app/shared/services';
import { langParam } from '@app/shared/utils';
import { TranslateService } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-job-search',
  templateUrl: './job-search.component.html',
  styleUrls: ['./job-search.component.scss'],
})
export class JobSearchComponent implements OnInit, OnDestroy {
  private destroyed$: Subject<void> = new Subject<void>();
  results: JobOfferVM[] = [];
  total?: number = undefined;
  categoryRoutingName = CategoryRoutingName;
  corePath = CorePath;
  searchCriteria: JobOfferSearchCriteria = {};
  @ViewChild('jobResultsStart', { read: ElementRef }) resultsStart!: ElementRef<HTMLElement>;

  constructor(
    private jobResourceService: JobResourceService,
    private route: ActivatedRoute,
    private mobileViewportDetect: MobileViewportDetectService,
    private translateService: TranslateService
  ) {}

  ngOnInit() {
    this.searchCriteria.lang = langParam(this.translateService.currentLang) as JobOfferSearchCriteria.LangEnum;
    const { city, region } = this.route.snapshot.queryParams;
    const searchCriteria: JobQuery = {
      location: {
        region,
        city,
      },
    };

    this.translateService.onLangChange.pipe(takeUntil(this.destroyed$)).subscribe((params) => {
      this.searchCriteria.lang = langParam(params.lang) as JobOfferSearchCriteria.LangEnum;
      this.search();
    });

    this.search(searchCriteria);
  }

  search(searchCriteria?: JobQuery) {
    const { page, size, sort } = this.route.snapshot.queryParams;

    if (searchCriteria) {
      this.searchCriteria.industry = searchCriteria?.industry;
      this.searchCriteria.mode = searchCriteria?.mode;
      this.searchCriteria.contractType = searchCriteria?.contractType;
      this.searchCriteria.workTime = searchCriteria?.workTime;
      this.searchCriteria.language = searchCriteria?.language;
      this.searchCriteria.location = searchCriteria?.location;
    }

    const pageRequest: Pageable = {
      page,
      size,
      sort,
    };

    this.jobResourceService.listJob(pageRequest, this.searchCriteria).subscribe({
      next: (results) => {
        this.results = results.content ?? [];
        this.total = results.totalElements ?? 0;
        if (this.mobileViewportDetect.isMobileView) {
          this.resultsStart?.nativeElement?.scrollIntoView();
        }
      },
      error: () => {
        this.results = [];
        this.total = undefined;
      },
    });
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.unsubscribe();
  }
}
