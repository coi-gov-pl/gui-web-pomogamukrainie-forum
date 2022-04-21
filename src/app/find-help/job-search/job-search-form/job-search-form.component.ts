import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { JobOffer, JobOfferSearchCriteria, Location } from '@app/core/api';
import { StoreUrlService } from '@app/core/store-url';
import { LocalStorageKeys, StatementAnchors } from '@app/shared/models';
import { SortingFieldName, SortingOrder } from '@app/shared/models/sortingOrder.model';

export interface JobQuery {
  location?: Location;
  industry?: JobOfferSearchCriteria.IndustryEnum;
  workTime?: JobOfferSearchCriteria.WorkTimeEnum;
  contractType?: JobOfferSearchCriteria.ContractTypeEnum;
  mode?: JobOfferSearchCriteria.ModeEnum;
  language?: Array<JobOfferSearchCriteria.LanguageEnum>;
}

const industries = Object.entries(JobOffer.IndustryEnum).map(([key, value]) => ({
  code: key,
  value,
}));

const modes = Object.entries(JobOffer.ModeEnum).map(([key, value]) => ({
  code: key,
  value,
}));

const contractTypes = Object.entries(JobOffer.ContractTypeEnum).map(([key, value]) => ({
  code: key,
  value,
}));

const workTimes = Object.entries(JobOffer.WorkTimeEnum).map(([key, value]) => ({
  code: key,
  value,
}));

const languages = Object.entries(JobOffer.LanguageEnum).map(([key, value]) => ({
  code: key,
  value,
}));

interface Option {
  code: string;
  value: string;
}

const cleanForm = {
  industry: undefined,
  mode: undefined,
  contractType: undefined,
  workTime: undefined,
  language: undefined,
  city: undefined,
  region: undefined,
  location: undefined,
};

@Component({
  selector: 'app-job-search-form',
  templateUrl: './job-search-form.component.html',
  styleUrls: ['./job-search-form.component.scss'],
})
export class JobSearchFormComponent implements OnInit {
  data: JobOfferSearchCriteria = {};
  industries: Option[] = industries;
  modes: Option[] = modes;
  contractTypes: Option[] = contractTypes;
  workTimes: Option[] = workTimes;
  languages: Option[] = languages;
  @Output()
  search = new EventEmitter<JobOfferSearchCriteria>();
  statementAnchor: string = StatementAnchors.JOB;

  constructor(private router: Router, private route: ActivatedRoute, private storeUrlService: StoreUrlService) {}

  ngOnInit() {
    if (Object.keys(this.route.snapshot.queryParams).length > 0) {
      const { industry, mode, contractType, workTime, city, region } = this.route.snapshot.queryParams;
      this.data = { industry, mode, contractType, workTime, location: city ? { city, region } : undefined };
    }
  }

  async onSubmit(): Promise<void> {
    const param: Params = {
      page: 0,
      size: localStorage.getItem(LocalStorageKeys.PageSize) ?? 5,
      sort: [`${SortingFieldName},${SortingOrder.descending}`],
      industry: this.data?.industry,
      mode: this.data?.mode,
      contractType: this.data?.contractType,
      workTime: this.data?.workTime,
      language: this.data?.language,
      city: this.data.location?.city,
      region: this.data.location?.region,
    };
    await this.storeUrlService.setCustomPaginatorParam(param);
    this.search.emit(this.data);
  }

  async clearFilters(): Promise<void> {
    this.data = {};
    const { page, size, sort } = this.route.snapshot.queryParams;
    const param: Params = {
      page,
      size,
      sort,
      ...cleanForm,
    };
    await this.storeUrlService.setCustomPaginatorParam(param);
    this.search.emit(this.data);
  }
}
