import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { JobOffer, JobResourceService, Pageable } from '@app/core/api';
import { CategoryRoutingName, CorePath } from '@app/shared/models';
import { ActivatedRoute } from '@angular/router';
import { JobQuery } from './job-search-form/job-search-form.component';

@Component({
  selector: 'app-job-search',
  templateUrl: './job-search.component.html',
  styleUrls: ['./job-search.component.scss'],
})
export class JobSearchComponent implements OnInit {
  results: JobOffer[] = [];
  total?: number = undefined;
  categoryRoutingName = CategoryRoutingName;
  corePath = CorePath;
  searchCriteria: JobQuery = {};
  @ViewChild('jobResultsStart', { read: ElementRef }) resultsStart!: ElementRef<HTMLElement>;
  JobOffer = JobOffer;

  constructor(private jobResourceService: JobResourceService, private route: ActivatedRoute) {}

  ngOnInit() {
    const { city, region } = this.route.snapshot.queryParams;
    const searchCriteria: JobQuery = {
      location: {
        region,
        city,
      },
    };
    this.search(searchCriteria);
  }

  search(searchCriteria?: JobQuery) {
    const { page, size, sort } = this.route.snapshot.queryParams;

    if (searchCriteria) {
      this.searchCriteria.industry = searchCriteria?.industry;
      this.searchCriteria.mode = searchCriteria?.mode;
      this.searchCriteria.contractType = searchCriteria?.contractType;
      this.searchCriteria.workTime = searchCriteria?.workTime;
      this.searchCriteria.language = searchCriteria?.language;
    }

    const pageRequest: Pageable = {
      page,
      size,
      sort,
    };

    this.jobResourceService.listJob(pageRequest, this.searchCriteria).subscribe({
      next: (results) => {
        this.results = results.content ?? [];
        this.total = results.totalElements ?? 0;
        this.resultsStart?.nativeElement?.scrollIntoView();
      },
      error: () => {
        this.results = [];
        this.total = undefined;
      },
    });
  }
}
