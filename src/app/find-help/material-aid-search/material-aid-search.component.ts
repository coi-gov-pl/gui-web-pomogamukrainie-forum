import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  MaterialAidOfferVM,
  MaterialAidOfferSearchCriteria,
  MaterialAidResourceService,
  Pageable,
} from '@app/core/api';
import { CategoryRoutingName, CorePath } from '@app/shared/models';
import { ActivatedRoute } from '@angular/router';
import { MobileViewportDetectService } from '@app/shared/services';

@Component({
  selector: 'app-material-aid-search',
  templateUrl: './material-aid-search.component.html',
  styleUrls: ['./material-aid-search.component.scss'],
})
export class MaterialAidSearchComponent implements OnInit {
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
    private mobileViewportDetect: MobileViewportDetectService
  ) {}

  ngOnInit() {
    const { category, city, region } = this.route.snapshot.queryParams;
    const searchCriteria: MaterialAidOfferSearchCriteria = {
      category,
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
}
