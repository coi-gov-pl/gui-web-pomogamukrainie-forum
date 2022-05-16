import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Pageable, TranslationResourceService, TranslationOffer, TranslationOfferSearchCriteria } from '@app/core/api';
import { CategoryRoutingName, CorePath } from '@app/shared/models';
import { ActivatedRoute } from '@angular/router';
import { MobileViewportDetectService } from '@app/shared/services';

@Component({
  selector: 'app-translation-search',
  templateUrl: './translation-search.component.html',
  styleUrls: ['./translation-search.component.scss'],
})
export class TranslationSearchComponent implements OnInit {
  results: TranslationOffer[] = [];
  total?: number = undefined;
  categoryRoutingName = CategoryRoutingName;
  corePath = CorePath;
  searchCriteria: TranslationOfferSearchCriteria = {};
  pagination: Pageable | undefined = {};
  @ViewChild('translationResultsStart', { read: ElementRef }) resultsStart!: ElementRef<HTMLElement>;

  constructor(
    private translationResourceService: TranslationResourceService,
    private route: ActivatedRoute,
    private mobileViewportDetect: MobileViewportDetectService
  ) {}

  ngOnInit() {
    const { city, region, language, mode } = this.route.snapshot.queryParams;
    const searchCriteria: TranslationOfferSearchCriteria = {
      location: {
        region,
        city,
      },
      language,
      mode,
    };
    this.search(searchCriteria);
  }

  search(searchCriteria?: TranslationOfferSearchCriteria) {
    const { page, size, sort } = this.route.snapshot.queryParams;

    if (searchCriteria) {
      this.searchCriteria.location = searchCriteria?.location;
      this.searchCriteria.language = searchCriteria?.language;
      this.searchCriteria.mode = searchCriteria?.mode;
    }

    const pageRequest: Pageable = {
      page,
      size,
      sort,
    };

    this.translationResourceService.listTranslation(pageRequest, this.searchCriteria).subscribe({
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
}
