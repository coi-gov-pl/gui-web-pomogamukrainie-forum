import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LawOffer, LawOfferSearchCriteria } from '@app/core/api';
import { Option, StatementAnchors } from '@app/shared/models';
import { ActivatedRoute, Params } from '@angular/router';
import { StoreUrlService } from '@app/core/store-url';
import { LocalStorageKeys } from '@app/shared/models';
import { SortingFieldName, SortingOrder } from '@app/shared/models/sortingOrder.model';
import { LAW_LANGUAGES } from '@app/shared/consts';

const HELP_KIND = Object.entries(LawOffer.HelpKindEnum).map(([key, value]) => ({
  code: value,
  label: value,
}));

const HELP_MODE = Object.entries(LawOffer.HelpModeEnum).map(([key, value]) => ({
  code: value,
  label: value,
}));

@Component({
  selector: 'app-law-search-form',
  templateUrl: './law-search-form.component.html',
  styleUrls: ['./law-search-form.component.scss'],
})
export class LawSearchFormComponent implements OnInit {
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
}
