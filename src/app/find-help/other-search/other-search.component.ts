import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OtherOfferSearchCriteria, OtherOfferVM, OtherResourceService, Pageable } from '@app/core/api';
import { CategoryRoutingName, CorePath } from '@app/shared/models';
import { ActivatedRoute } from '@angular/router';
import { MobileViewportDetectService } from '@app/shared/services';

@Component({
  selector: 'app-other-search',
  templateUrl: './other-search.component.html',
  styleUrls: ['./other-search.component.scss'],
})
export class OtherSearchComponent implements OnInit {
  results: OtherOfferVM[] = [];
  total?: number = undefined;
  categoryRoutingName = CategoryRoutingName;
  corePath = CorePath;
  searchCriteria: OtherOfferSearchCriteria = {};
  pagination: Pageable | undefined = {};
  @ViewChild('otherResultsStart', { read: ElementRef }) resultsStart!: ElementRef<HTMLElement>;

  constructor(
    private otherResourceService: OtherResourceService,
    private route: ActivatedRoute,
    private mobileViewportDetect: MobileViewportDetectService
  ) {}

  ngOnInit() {
    const { searchText, city, region } = this.route.snapshot.queryParams;
    const searchCriteria: OtherOfferSearchCriteria = {
      searchText,
      location: {
        region,
        city,
      },
    };
    this.search(searchCriteria);
  }

  search(searchCriteria?: OtherOfferSearchCriteria) {
    const { page, size, sort } = this.route.snapshot.queryParams;

    if (searchCriteria) {
      this.searchCriteria.searchText = searchCriteria?.searchText;
      this.searchCriteria.location = searchCriteria?.location;
    }

    const pageRequest: Pageable = {
      page,
      size,
      sort,
    };

    this.otherResourceService.listOther(pageRequest, this.searchCriteria).subscribe({
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
