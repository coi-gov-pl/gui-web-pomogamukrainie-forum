import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { StatementAnchors } from '@app/shared/models';
import { ActivatedRoute, Params } from '@angular/router';
import { StoreUrlService } from '@app/core/store-url';
import { LocalStorageKeys } from '@app/shared/models';
import { SortingFieldName, SortingOrder } from '@app/shared/models/sortingOrder.model';
import { HealthOfferSearchCriteria } from '@app/core/api/model/healthOfferSearchCriteria';
import { LANGUAGES } from '@app/shared/consts'; // TODO: define languages for Health or global ones?

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

@Component({
  selector: 'app-health-search-form',
  templateUrl: './health-search-form.component.html',
  styleUrls: ['./health-search-form.component.scss'],
})
export class HealthSearchFormComponent implements OnInit {
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
}
