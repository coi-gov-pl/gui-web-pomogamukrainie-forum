import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AccommodationQuery } from './accommodation-search-form/accommodation-search-form.component';
import {
  AccommodationsResourceService,
  AccommodationOfferVM,
  Pageable,
  AccommodationOfferSearchCriteria,
} from '@app/core/api';
import { CategoryRoutingName, CorePath } from '@app/shared/models';
import { ActivatedRoute } from '@angular/router';
import { MobileViewportDetectService } from '@app/shared/services';
import { defaults, langParam } from '@app/shared/utils';
import { TranslateService } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-accommodation-search',
  templateUrl: './accommodation-search.component.html',
  styleUrls: ['./accommodation-search.component.scss'],
})
export class AccommodationSearchComponent implements OnInit, OnDestroy {
  private destroyed$: Subject<void> = new Subject<void>();
  results: AccommodationOfferVM[] = [];
  total?: number = undefined;
  categoryRoutingName = CategoryRoutingName;
  corePath = CorePath;
  searchCriteria: AccommodationQuery = {};
  pagination: Pageable | undefined = {};
  @ViewChild('accomodationResultsStart', { read: ElementRef }) resultsStart!: ElementRef<HTMLElement>;

  constructor(
    private accommodationsResourceService: AccommodationsResourceService,
    private route: ActivatedRoute,
    private mobileViewportDetect: MobileViewportDetectService,
    private translateService: TranslateService
  ) {}

  ngOnInit() {
    this.searchCriteria.lang = langParam(
      this.translateService.currentLang
    ) as AccommodationOfferSearchCriteria.LangEnum;
    const { capacity, city, region } = this.route.snapshot.queryParams;
    const searchCriteria: AccommodationQuery = {
      capacity,
      location: {
        region,
        city,
      },
    };

    this.translateService.onLangChange.pipe(takeUntil(this.destroyed$)).subscribe((params) => {
      this.searchCriteria.lang = langParam(params.lang) as AccommodationOfferSearchCriteria.LangEnum;
      this.search();
    });

    this.search(searchCriteria);
  }

  getResultsObservable(
    region: string | undefined,
    city: string | undefined,
    pageRequest: Pageable,
    capacity: number | undefined,
    lang: AccommodationOfferSearchCriteria.LangEnum | undefined
  ) {
    const searchCriteria = defaults<AccommodationOfferSearchCriteria>();
    searchCriteria.capacity = capacity;
    searchCriteria.lang = lang;
    if (region && city) {
      return this.accommodationsResourceService.listByLocationAccommodations(region, city, searchCriteria, pageRequest);
    } else {
      return this.accommodationsResourceService.listAccommodations(searchCriteria, pageRequest);
    }
  }

  search(searchCriteria?: AccommodationQuery) {
    const { page, size, sort } = this.route.snapshot.queryParams;
    if (searchCriteria) {
      this.searchCriteria.capacity = searchCriteria?.capacity;
      this.searchCriteria.location = searchCriteria?.location;
    }

    const pageRequest: Pageable = {
      page,
      size,
      sort,
    };

    const { location: { region, city } = {}, capacity, lang } = this.searchCriteria;

    this.getResultsObservable(region, city, pageRequest, capacity, lang).subscribe({
      next: (results) => {
        this.results = results.content ?? [];
        this.total = results.totalElements;
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
