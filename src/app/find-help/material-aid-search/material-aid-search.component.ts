import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MaterialAidOffer, MaterialAidOfferSearchCriteria, MaterialAidResourceService, Pageable } from '@app/core/api';
import { CategoryRoutingName, CorePath } from '@app/shared/models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-material-aid-search',
  templateUrl: './material-aid-search.component.html',
  styleUrls: ['./material-aid-search.component.scss'],
})
export class MaterialAidSearchComponent implements OnInit {
  results: MaterialAidOffer[] = [];
  total?: number = undefined;
  loading = false;
  categoryRoutingName = CategoryRoutingName;
  corePath = CorePath;
  searchCriteria: MaterialAidOfferSearchCriteria = {};
  pagination: Pageable | undefined = {};
  @ViewChild('materialAidResultsStart', { read: ElementRef }) resultsStart!: ElementRef<HTMLElement>;

  constructor(private materialAidResourceService: MaterialAidResourceService, private route: ActivatedRoute) {}

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
    this.loading = true;

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
        this.loading = false;
        this.resultsStart?.nativeElement?.scrollIntoView();
      },
      error: () => {
        this.results = [];
        this.total = undefined;
        this.loading = false;
      },
    });
  }
}
