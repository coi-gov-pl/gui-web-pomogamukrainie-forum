import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {
  MaterialAidOfferVM,
  MaterialAidOfferSearchCriteria,
  MaterialAidResourceService,
  Pageable,
} from '@app/core/api';
import { CategoryRoutingName, CorePath } from '@app/shared/models';
import { ActivatedRoute } from '@angular/router';
import { MobileViewportDetectService } from '@app/shared/services';
import { Subject, takeUntil } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { langParam } from '@app/shared/utils';

@Component({
  selector: 'app-material-aid-search',
  templateUrl: './material-aid-search.component.html',
  styleUrls: ['./material-aid-search.component.scss'],
})
export class MaterialAidSearchComponent implements OnInit, OnDestroy {
  private destroyed$: Subject<void> = new Subject<void>();
  results: MaterialAidOfferVM[] = [];
  total?: number = undefined;
  categoryRoutingName = CategoryRoutingName;
  corePath = CorePath;
  searchCriteria: MaterialAidOfferSearchCriteria = {};
  pagination: Pageable | undefined = {};
  @ViewChild('materialAidResultsStart', { read: ElementRef }) resultsStart!: ElementRef<HTMLElement>;

  constructor(
    private materialAidResourceService: MaterialAidResourceService,
    private route: ActivatedRoute,
    private mobileViewportDetect: MobileViewportDetectService,
    private translateService: TranslateService
  ) {}

  ngOnInit() {
    this.searchCriteria.lang = langParam(this.translateService.currentLang) as MaterialAidOfferSearchCriteria.LangEnum;
    const { category, city, region } = this.route.snapshot.queryParams;
    const searchCriteria: MaterialAidOfferSearchCriteria = {
      category,
      location: {
        region,
        city,
      },
    };

    this.translateService.onLangChange.pipe(takeUntil(this.destroyed$)).subscribe((params) => {
      this.searchCriteria.lang = langParam(params.lang) as MaterialAidOfferSearchCriteria.LangEnum;
      this.search();
    });

    this.search(searchCriteria);
  }

  search(searchCriteria?: MaterialAidOfferSearchCriteria) {
    const { page, size, sort } = this.route.snapshot.queryParams;

    if (searchCriteria) {
      this.searchCriteria.category = searchCriteria?.category;
      this.searchCriteria.location = searchCriteria?.location;
    }

    const pageRequest: Pageable = {
      page,
      size,
      sort,
    };

    this.materialAidResourceService.listMaterialAid(pageRequest, this.searchCriteria).subscribe({
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
