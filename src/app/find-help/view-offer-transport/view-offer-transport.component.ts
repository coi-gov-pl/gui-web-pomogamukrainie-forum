import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Pageable, TransportOfferVM, TransportResourceService } from '@app/core/api';
import { CategoryRoutingName, LangParam } from '@app/shared/models';
import { defaults, langParam } from '@app/shared/utils';
import { CorePath } from '@app/shared/models';
import { TransportOfferSearchCriteria } from '../../core/api/model/transportOfferSearchCriteria';
import { transportOffer } from '../../../../mock/data/transport';
import { TranslateService } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-view-offer-transport',
  templateUrl: './view-offer-transport.component.html',
  styleUrls: ['./view-offer-transport.component.scss'],
})
export class ViewOfferTransportComponent implements OnInit, OnDestroy {
  private destroyed$: Subject<void> = new Subject<void>();
  offerId: number = 0;
  data = defaults<TransportOfferVM>();
  categoryRouteName = CategoryRoutingName.TRANSPORT;
  redirectedFromAccount: boolean;
  originalAccountQueryParams?: Params;
  offerResults: TransportOfferVM[] = [];
  activeOffer: TransportOfferVM | undefined;
  activeIndex: number = 0;
  blurClass = '';
  searchCriteria = defaults<TransportOfferSearchCriteria>();
  lang: LangParam;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private transportResourceService: TransportResourceService,
    private translateService: TranslateService
  ) {
    // https://stackoverflow.com/questions/54891110/router-getcurrentnavigation-always-returns-null
    // in constructor, because null will be returned in ngOnInit
    this.redirectedFromAccount = !!this.router.getCurrentNavigation()?.extras?.state?.['redirectFromAccount'];
    this.originalAccountQueryParams = this.router.getCurrentNavigation()?.extras?.state?.['queryParams'];

    this.lang = langParam(this.translateService.currentLang) as LangParam;
  }

  ngOnInit(): void {
    this.offerId = Number(this.route.snapshot.paramMap.get('id'));
    this.getTransportOffer();
    this.getResults();

    this.translateService.onLangChange.pipe(takeUntil(this.destroyed$)).subscribe((params) => {
      this.lang = langParam(params.lang) as LangParam;
      this.getTransportOffer();
      this.getResults();
    });
  }

  getTransportOffer() {
    this.transportResourceService.getTransport(this.offerId, this.lang).subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        this.router.navigate([CorePath.Find, this.categoryRouteName, CategoryRoutingName.NOT_FOUND]);
      }
    );
  }

  getResults() {
    this.searchCriteria.lang = this.lang;

    this.searchCriteria.origin = {
      region: this.originalAccountQueryParams?.['originRegion'],
      city: this.originalAccountQueryParams?.['originCity'],
    };
    this.searchCriteria.destination = {
      region: this.originalAccountQueryParams?.['destinationRegion'],
      city: this.originalAccountQueryParams?.['destinationCity'],
    };
    this.searchCriteria.capacity = this.originalAccountQueryParams?.['capacity'];
    this.searchCriteria.transportDate = this.originalAccountQueryParams?.['transportDate'];
    const SORT = this.originalAccountQueryParams?.['sort']
      ? this.originalAccountQueryParams?.['sort']
      : 'modifiedDate,asc';
    const PAGEREQUEST: Pageable = {
      page: undefined,
      size: 999999999,
      sort: SORT,
    };

    this.transportResourceService.listTransport(PAGEREQUEST, this.searchCriteria).subscribe((results) => {
      this.offerResults = results.content ?? [];
      this.activeOffer = this.offerResults.find((x) => x.id === this.offerId);
      this.activeIndex = this.offerResults.findIndex((x) => x.id === this.offerId);
    });
  }

  slideOffer(index: number, direction: 'prev' | 'next') {
    this.blurAnimate();
    if (direction === 'prev') {
      const SLIDE_PREV_DATA: TransportOfferVM = this.offerResults[index - 1];
      this.router.navigate([CorePath.Find, this.categoryRouteName, SLIDE_PREV_DATA.id]);
      this.activeIndex = index >= 0 ? index - 1 : index;
      this.offerId = SLIDE_PREV_DATA.id;
      this.data = SLIDE_PREV_DATA;
    } else {
      const SLIDE_NEXT_DATA: TransportOfferVM = this.offerResults[index + 1];
      this.router.navigate([CorePath.Find, this.categoryRouteName, SLIDE_NEXT_DATA.id]);
      this.activeIndex = index >= 0 ? index + 1 : index;
      this.offerId = SLIDE_NEXT_DATA.id;
      this.data = SLIDE_NEXT_DATA;
    }
  }

  blurAnimate() {
    this.blurClass = 'blurClass';
    setTimeout(() => {
      this.blurClass = '';
    }, 300);
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.unsubscribe();
  }
}
