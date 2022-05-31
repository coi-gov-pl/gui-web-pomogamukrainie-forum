import { Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { TranslationOfferVM, TranslationOfferSearchCriteria } from '@app/core/api';
import { StoreUrlService } from '@app/core/store-url';
import { LANGUAGES } from '@app/shared/consts';
import { LocalStorageKeys, StatementAnchors } from '@app/shared/models';
import { SortingFieldName, SortingOrder } from '@app/shared/models/sortingOrder.model';
import { formFieldEmpty } from '@app/shared/utils';
import { Subscription } from 'rxjs';

const cleanForm = {
  city: undefined,
  region: undefined,
  language: undefined,
  mode: undefined,
};

@Component({
  selector: 'app-translation-search-form',
  templateUrl: './translation-search-form.component.html',
  styleUrls: ['./translation-search-form.component.scss'],
})
export class TranslationSearchFormComponent implements OnInit, OnDestroy {
  @ViewChild('form', { static: true })
  ngForm: NgForm = new NgForm([], []);
  formChangesSubscription = new Subscription();
  showClearBtn = false;
  data: TranslationOfferSearchCriteria = {};
  modes = Object.values(TranslationOfferVM.ModeEnum);
  languages = LANGUAGES;
  @Output()
  search = new EventEmitter<TranslationOfferSearchCriteria>();
  statementAnchor: string = StatementAnchors.TRANSLATIONS;

  constructor(private route: ActivatedRoute, private storeUrlService: StoreUrlService) {}

  ngOnInit() {
    if (Object.keys(this.route.snapshot.queryParams).length > 0) {
      const { city, region, language, mode } = this.route.snapshot.queryParams;
      this.data = { location: city ? { city, region } : undefined, language, mode };
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
      language: this.data?.language,
      mode: this.data?.mode,
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
