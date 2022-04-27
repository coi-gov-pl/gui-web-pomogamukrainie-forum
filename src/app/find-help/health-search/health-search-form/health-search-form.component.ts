import { Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { HealthOfferSearchCriteria } from '@app/core/api/model/healthOfferSearchCriteria';
import { StoreUrlService } from '@app/core/store-url';
import { LANGUAGES } from '@app/shared/consts'; // TODO: define languages for Health or global ones?
import { LocalStorageKeys, StatementAnchors } from '@app/shared/models';
import { SortingFieldName, SortingOrder } from '@app/shared/models/sortingOrder.model';
import { formFieldEmpty } from '@app/shared/utils';
import { Subscription } from 'rxjs';

const specializations = Object.entries(HealthOfferSearchCriteria.SpecializationEnum).map(([key, value]) => ({
  code: key,
  value,
}));

const modes = Object.entries(HealthOfferSearchCriteria.ModeEnum).map(([key, value]) => ({
  code: key,
  value,
}));

interface Option {
  code: string;
  value: string;
}

const cleanForm = {
  city: undefined,
  region: undefined,
  specialization: undefined,
  language: undefined,
  healthMode: undefined,
  location: undefined,
};

@Component({
  selector: 'app-health-search-form',
  templateUrl: './health-search-form.component.html',
  styleUrls: ['./health-search-form.component.scss'],
})
export class HealthSearchFormComponent implements OnInit, OnDestroy {
  @ViewChild('form', { static: true })
  ngForm: NgForm = new NgForm([], []);
  formChangesSubscription = new Subscription();
  showClearBtn = false;
  data: HealthOfferSearchCriteria = {};
  specializations: Option[] = specializations;
  modes: Option[] = modes;
  LANGUAGES = LANGUAGES;
  @Output()
  search = new EventEmitter<HealthOfferSearchCriteria>();
  statementAnchor: string = StatementAnchors.HEALTH;

  constructor(private route: ActivatedRoute, private storeUrlService: StoreUrlService) {}

  ngOnInit() {
    if (Object.keys(this.route.snapshot.queryParams).length > 0) {
      const { city, region, specialization, language, healthMode } = this.route.snapshot.queryParams;
      this.data = {
        location: city ? { city, region } : undefined,
        specialization,
        language,
        mode: healthMode,
      };
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
      city: this.data.location?.city,
      region: this.data.location?.region,
      specialization: this.data.specialization,
      language: this.data.language,
      healthMode: this.data.mode,
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
