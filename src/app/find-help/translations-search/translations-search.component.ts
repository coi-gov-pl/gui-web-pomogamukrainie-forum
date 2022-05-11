import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Pageable, TranslationResourceService } from '@app/core/api';
import { CategoryRoutingName, CorePath } from '@app/shared/models';
import { ActivatedRoute } from '@angular/router';
import { MobileViewportDetectService } from '@app/shared/services';
import { TranslationsOfferSearchCriteria } from './translations-search-form/translations-search-form.component'; // TODO import from API
import { TranslationsOffer } from './translations-search-form/translations-search-form.component';

@Component({
  selector: 'app-translations-search',
  templateUrl: './translations-search.component.html',
  styleUrls: ['./translations-search.component.scss'],
})
export class TranslationsSearchComponent implements OnInit {
  results: TranslationsOffer[] = [];
  total?: number = undefined;
  categoryRoutingName = CategoryRoutingName;
  corePath = CorePath;
  searchCriteria: TranslationsOfferSearchCriteria = {};
  pagination: Pageable | undefined = {};
  @ViewChild('translationsResultsStart', { read: ElementRef }) resultsStart!: ElementRef<HTMLElement>;

  constructor(
    private translationResourceService: TranslationResourceService,
    private route: ActivatedRoute,
    private mobileViewportDetect: MobileViewportDetectService
  ) {}

  ngOnInit() {
    const { city, region, language, mode } = this.route.snapshot.queryParams;
    const searchCriteria: TranslationsOfferSearchCriteria = {
      location: {
        region,
        city,
      },
      language,
      mode,
    };
    this.search(searchCriteria);
  }

  search(searchCriteria?: TranslationsOfferSearchCriteria) {
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

    // this.translationResourceService.listTranslation(pageRequest, this.searchCriteria).subscribe({
    //   next: (results) => {
    //     this.results = results.content ?? [];
    //     this.total = results.totalElements ?? 0;
    //     if (this.mobileViewportDetect.isMobileView) {
    //       this.resultsStart?.nativeElement?.scrollIntoView();
    //     }
    //   },
    //   error: () => {
    //     this.results = [];
    //     this.total = undefined;
    //   },
    // });
  }
}
