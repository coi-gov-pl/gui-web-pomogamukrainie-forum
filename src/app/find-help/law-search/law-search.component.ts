import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LawOffer, LawOfferSearchCriteria, LawResourceService, Pageable } from '@app/core/api';
import { CategoryRoutingName, CorePath } from '@app/shared/models';
import { ActivatedRoute } from '@angular/router';
import { MobileViewportDetectService } from '@app/shared/services';

@Component({
  selector: 'app-law-search',
  templateUrl: './law-search.component.html',
  styleUrls: ['./law-search.component.scss'],
})
export class LawSearchComponent implements OnInit {
  results: LawOffer[] = [];
  total?: number = undefined;
  categoryRoutingName = CategoryRoutingName;
  corePath = CorePath;
  searchCriteria: LawOfferSearchCriteria = {};
  pagination: Pageable | undefined = {};
  @ViewChild('lawResultsStart', { read: ElementRef }) resultsStart!: ElementRef<HTMLElement>;

  constructor(
    private lawResourceService: LawResourceService,
    private route: ActivatedRoute,
    private mobileViewportDetect: MobileViewportDetectService
  ) {}

  ngOnInit() {
    const { city, region, lawMode, lawKind, language } = this.route.snapshot.queryParams;
    const searchCriteria: LawOfferSearchCriteria = {
      location: {
        region,
        city,
      },
      helpMode: lawMode,
      helpKind: lawKind,
      language,
    };
    this.search(searchCriteria);
  }

  search(searchCriteria?: LawOfferSearchCriteria) {
    const { page, size, sort } = this.route.snapshot.queryParams;

    if (searchCriteria) {
      this.searchCriteria.location = searchCriteria?.location;
      this.searchCriteria.helpKind = searchCriteria?.helpKind;
      this.searchCriteria.helpMode = searchCriteria?.helpMode;
      this.searchCriteria.language = searchCriteria?.language;
    }

    const pageRequest: Pageable = {
      page,
      size,
      sort,
    };

    this.lawResourceService.listLaw(pageRequest, this.searchCriteria).subscribe({
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
