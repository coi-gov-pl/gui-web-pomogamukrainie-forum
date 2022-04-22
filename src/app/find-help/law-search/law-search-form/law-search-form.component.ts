import { Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { LawOffer, LawOfferSearchCriteria } from '@app/core/api';
import { StoreUrlService } from '@app/core/store-url';
import { LAW_LANGUAGES } from '@app/shared/consts';
import { LocalStorageKeys, Option, StatementAnchors } from '@app/shared/models';
import { SortingFieldName, SortingOrder } from '@app/shared/models/sortingOrder.model';
import { Subscription } from 'rxjs';

const HELP_KIND = Object.entries(LawOffer.HelpKindEnum).map(([key, value]) => ({
  code: value,
  label: value,
}));

const HELP_MODE = Object.entries(LawOffer.HelpModeEnum).map(([key, value]) => ({
  code: value,
  label: value,
}));

const cleanForm = {
  location: undefined,
  city: undefined,
  region: undefined,
  lawMode: undefined,
  lawKind: undefined,
  language: undefined,
};

@Component({
  selector: 'app-law-search-form',
  templateUrl: './law-search-form.component.html',
  styleUrls: ['./law-search-form.component.scss'],
})
export class LawSearchFormComponent implements OnInit, OnDestroy {
  @ViewChild('form', { static: true })
  ngForm: NgForm = new NgForm([], []);
  formChangesSubscription = new Subscription();
  showClearBtn = false;
  data: LawOfferSearchCriteria = {};
  LANGUAGES = LAW_LANGUAGES;
  HELP_KIND: Option[] = HELP_KIND;
  HELP_MODE: Option[] = HELP_MODE;
  @Output()
  search = new EventEmitter<LawOfferSearchCriteria>();
  statementAnchor: string = StatementAnchors.LEGAL_HELP;

  constructor(private route: ActivatedRoute, private storeUrlService: StoreUrlService) {}

  ngOnInit() {
    if (Object.keys(this.route.snapshot.queryParams).length > 0) {
      const { city, region, lawMode, lawKind, language } = this.route.snapshot.queryParams;
      this.data = { location: city ? { city, region } : undefined, helpMode: lawMode, helpKind: lawKind, language };
    }

    this.formChangesSubscription = this.ngForm.form.valueChanges.subscribe((form) => {
      this.showClearBtn = Object.values(form).some((el) => el !== undefined);
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
      lawMode: this.data.helpMode,
      lawKind: this.data.helpKind,
      language: this.data.language,
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
