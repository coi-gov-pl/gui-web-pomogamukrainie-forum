import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MaterialAidOfferSearchCriteria, OtherOffer, OtherResourceService, Pageable } from '@app/core/api';
import { CategoryRoutingName, CorePath } from '@app/shared/models';
import { ActivatedRoute } from '@angular/router';
import { MobileViewportDetectService } from '@app/shared/services';

@Component({
  selector: 'app-other-search',
  templateUrl: './other-search.component.html',
  styleUrls: ['./other-search.component.scss'],
})
export class OtherSearchComponent implements OnInit {
  results: OtherOffer[] = [];
  total?: number = undefined;
  categoryRoutingName = CategoryRoutingName;
  corePath = CorePath;
  searchCriteria: MaterialAidOfferSearchCriteria = {}; // TODO: searchCriteria for Other
  pagination: Pageable | undefined = {};
  @ViewChild('otherResultsStart', { read: ElementRef }) resultsStart!: ElementRef<HTMLElement>;

  constructor(
    private otherResourceService: OtherResourceService,
    private route: ActivatedRoute,
    private mobileViewportDetect: MobileViewportDetectService
  ) {}

  ngOnInit() {
    const { query, city, region } = this.route.snapshot.queryParams;
    const searchCriteria: MaterialAidOfferSearchCriteria = {
      query,
      location: {
        region,
        city,
      },
    };
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
