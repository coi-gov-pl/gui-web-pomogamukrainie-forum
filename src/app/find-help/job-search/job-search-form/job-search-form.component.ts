import { Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { JobOffer, JobOfferSearchCriteria, Location } from '@app/core/api';
import { StoreUrlService } from '@app/core/store-url';
import { LANGUAGES } from '@app/shared/consts';
import { LocalStorageKeys, StatementAnchors } from '@app/shared/models';
import { SortingFieldName, SortingOrder } from '@app/shared/models/sortingOrder.model';
import { formFieldEmpty } from '@app/shared/utils';
import { Subscription } from 'rxjs';

export interface JobQuery {
  location?: Location;
  industry?: JobOfferSearchCriteria.IndustryEnum;
  workTime?: JobOfferSearchCriteria.WorkTimeEnum;
  contractType?: JobOfferSearchCriteria.ContractTypeEnum;
  mode?: JobOfferSearchCriteria.ModeEnum;
  language?: Array<JobOfferSearchCriteria.LanguageEnum>;
}

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
export class JobSearchFormComponent implements OnInit, OnDestroy {
  @ViewChild('form', { static: true })
  ngForm: NgForm = new NgForm([], []);
  formChangesSubscription = new Subscription();
  showClearBtn = false;
  data: JobOfferSearchCriteria = {};
  industries = Object.values(JobOffer.IndustryEnum);
  modes: Option[] = modes;
  contractTypes: Option[] = contractTypes;
  workTimes: Option[] = workTimes;
  LANGUAGES = LANGUAGES;
  @Output()
  search = new EventEmitter<JobOfferSearchCriteria>();
  statementAnchor: string = StatementAnchors.JOB;

  constructor(private router: Router, private route: ActivatedRoute, private storeUrlService: StoreUrlService) {}

  ngOnInit() {
    if (Object.keys(this.route.snapshot.queryParams).length > 0) {
      const { industry, mode, contractType, workTime, city, region } = this.route.snapshot.queryParams;
      this.data = { industry, mode, contractType, workTime, location: city ? { city, region } : undefined };
    }

    this.formChangesSubscription = this.ngForm.form.valueChanges.subscribe((form) => {
      this.showClearBtn = Object.values(form).some((el) => !formFieldEmpty(el));
    });
  }

  ngOnDestroy() {
    this.formChangesSubscription.unsubscribe();
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
