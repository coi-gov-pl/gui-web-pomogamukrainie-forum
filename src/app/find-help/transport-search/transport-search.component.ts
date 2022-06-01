import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Pageable, TransportOfferVM, TransportOfferSearchCriteria, TransportResourceService } from '@app/core/api';
import { CategoryRoutingName, CorePath } from '@app/shared/models';
import { ActivatedRoute } from '@angular/router';
import { MobileViewportDetectService } from '@app/shared/services';
import { TranslateService } from '@ngx-translate/core';
import { langParam } from '@app/shared/utils';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-transport-search',
  templateUrl: './transport-search.component.html',
  styleUrls: ['./transport-search.component.scss'],
})
export class TransportSearchComponent implements OnInit, OnDestroy {
  private destroyed$: Subject<void> = new Subject<void>();
  results: TransportOfferVM[] = [];
  total?: number = undefined;
  CategoryRoutingName = CategoryRoutingName;
  corePath = CorePath;
  searchCriteria: TransportOfferSearchCriteria = {};
  pagination: Pageable | undefined;
  @ViewChild('transportResultsStart', { read: ElementRef }) resultsStart!: ElementRef<HTMLElement>;

  constructor(
    private transportResourceService: TransportResourceService,
    private route: ActivatedRoute,
    private mobileViewportDetect: MobileViewportDetectService,
    private translateService: TranslateService
  ) {}

  ngOnInit() {
    this.searchCriteria.lang = langParam(this.translateService.currentLang) as TransportOfferSearchCriteria.LangEnum;
    const { capacity, transportDate, originCity, originRegion, destinationCity, destinationRegion } =
      this.route.snapshot.queryParams;
    const searchCriteria: TransportOfferSearchCriteria = {
      capacity,
      transportDate,
      origin: {
        region: originRegion,
        city: originCity,
      },
      destination: {
        region: destinationRegion,
        city: destinationCity,
      },
    };

    this.translateService.onLangChange.pipe(takeUntil(this.destroyed$)).subscribe((params) => {
      this.searchCriteria.lang = langParam(params.lang) as TransportOfferSearchCriteria.LangEnum;
      this.search();
    });

    this.search(searchCriteria);
  }

  search(searchCriteria?: TransportOfferSearchCriteria) {
    const { page, size, sort } = this.route.snapshot.queryParams;

    if (searchCriteria) {
      this.searchCriteria.origin = searchCriteria?.origin;
      this.searchCriteria.destination = searchCriteria?.destination;
      this.searchCriteria.capacity = searchCriteria?.capacity;
      this.searchCriteria.transportDate = searchCriteria?.transportDate;
    }

    const pageRequest: Pageable = {
      page,
      size,
      sort,
    };

    this.transportResourceService.listTransport(pageRequest, this.searchCriteria).subscribe({
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
