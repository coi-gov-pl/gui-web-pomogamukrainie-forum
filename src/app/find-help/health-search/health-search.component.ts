import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Pageable } from '@app/core/api';
import { CategoryRoutingName, CorePath } from '@app/shared/models';
import { ActivatedRoute } from '@angular/router';
import { HealthOfferVM } from '@app/core/api';
import { HealthOfferSearchCriteria } from '@app/core/api/model/healthOfferSearchCriteria';
import { HealthResourceService } from '@app/core/api/api/healthResource.service';
import { MobileViewportDetectService } from '@app/shared/services';

@Component({
  selector: 'app-health-search',
  templateUrl: './health-search.component.html',
  styleUrls: ['./health-search.component.scss'],
})
export class HealthSearchComponent implements OnInit {
  results: HealthOfferVM[] = [];
  total?: number = undefined;
  categoryRoutingName = CategoryRoutingName;
  corePath = CorePath;
  searchCriteria: HealthOfferSearchCriteria = {};
  pagination: Pageable | undefined = {};
  @ViewChild('healthResultsStart', { read: ElementRef }) resultsStart!: ElementRef<HTMLElement>;

  constructor(
    private healthResourceService: HealthResourceService,
    private route: ActivatedRoute,
    private mobileViewportDetect: MobileViewportDetectService
  ) {}

  ngOnInit() {
    const { city, region, specialization, language, healthMode } = this.route.snapshot.queryParams;
    const searchCriteria: HealthOfferSearchCriteria = {
      location: {
        region,
        city,
      },
      specialization,
      language,
      mode: healthMode,
    };
    this.search(searchCriteria);
  }

  search(searchCriteria?: HealthOfferSearchCriteria) {
    const { page, size, sort } = this.route.snapshot.queryParams;

    if (searchCriteria) {
      this.searchCriteria.location = searchCriteria?.location;
      this.searchCriteria.specialization = searchCriteria?.specialization;
      this.searchCriteria.language = searchCriteria?.language;
      this.searchCriteria.mode = searchCriteria?.mode;
    }

    const pageRequest: Pageable = {
      page,
      size,
      sort,
    };

    this.healthResourceService.listHealth(pageRequest, this.searchCriteria).subscribe({
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
