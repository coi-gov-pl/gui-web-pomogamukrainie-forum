import { Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MaterialAidOfferSearchCriteria } from '@app/core/api';
import { StoreUrlService } from '@app/core/store-url';
import { LocalStorageKeys, StatementAnchors } from '@app/shared/models';
import { SortingFieldName, SortingOrder } from '@app/shared/models/sortingOrder.model';
import { formFieldEmpty } from '@app/shared/utils';
import { Subscription } from 'rxjs';

const cleanForm = {
  location: undefined,
  city: undefined,
  region: undefined,
};

@Component({
  selector: 'app-other-search-form',
  templateUrl: './other-search-form.component.html',
  styleUrls: ['./other-search-form.component.scss'],
})
export class OtherSearchFormComponent implements OnInit, OnDestroy {
  @ViewChild('form', { static: true })
  ngForm: NgForm = new NgForm([], []);
  formChangesSubscription = new Subscription();
  showClearBtn = false;
  data: MaterialAidOfferSearchCriteria = {};
  @Output()
  search = new EventEmitter<MaterialAidOfferSearchCriteria>();
  // statementAnchor: string = StatementAnchors.OTHER;

  constructor(private router: Router, private route: ActivatedRoute, private storeUrlService: StoreUrlService) {}

  ngOnInit() {
    if (Object.keys(this.route.snapshot.queryParams).length > 0) {
      const { query, city, region } = this.route.snapshot.queryParams;
      this.data = { query, location: city ? { city, region } : undefined };
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
