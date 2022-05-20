import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { LawOffer, LawOfferSearchCriteria, LawResourceService, Pageable } from '@app/core/api';
import { CategoryRoutingName, CorePath } from '@app/shared/models';
import { defaults } from '@app/shared/utils';

@Component({
  selector: 'app-view-offer-law',
  templateUrl: './view-offer-law.component.html',
  styleUrls: ['./view-offer-law.component.scss'],
})
export class ViewOfferLawComponent implements OnInit {
  offerId!: number;
  data = defaults<LawOffer>();
  categoryRouteName = CategoryRoutingName.LEGAL_HELP;
  redirectedFromAccount: boolean;
  originalAccountQueryParams?: Params;
  offerResults: LawOffer[] = [];
  activeOffer: LawOffer | undefined;
  activeIndex: number = 0;
  blurClass = '';
  searchCriteria = defaults<LawOfferSearchCriteria>();
  constructor(private route: ActivatedRoute, private lawResourceService: LawResourceService, private router: Router) {
    // https://stackoverflow.com/questions/54891110/router-getcurrentnavigation-always-returns-null
    // in constructor, because null will be returned in ngOnInit
    this.redirectedFromAccount = !!this.router.getCurrentNavigation()?.extras?.state?.['redirectFromAccount'];
    this.originalAccountQueryParams = this.router.getCurrentNavigation()?.extras?.state?.['queryParams'];
  }

  ngOnInit(): void {
    this.offerId = Number(this.route.snapshot.paramMap.get('id'));
    this.getLawOffer();
    this.getResults();
  }

  getLawOffer() {
    this.lawResourceService.getLaw(this.offerId).subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        this.router.navigate([CorePath.Find, this.categoryRouteName, CategoryRoutingName.NOT_FOUND]);
      }
    );
  }

  getResults() {
    this.searchCriteria.location = this.originalAccountQueryParams?.['location'];
    this.searchCriteria.helpKind = this.originalAccountQueryParams?.['helpKind'];
    this.searchCriteria.helpMode = this.originalAccountQueryParams?.['helpMode'];
    this.searchCriteria.language = this.originalAccountQueryParams?.['language'];

    const PAGEREQUEST: Pageable = {
      page: undefined,
      size: 999999999,
      sort: undefined,
    };

    this.lawResourceService.listLaw(PAGEREQUEST, this.searchCriteria).subscribe((results) => {
      this.offerResults = results.content ?? [];
      this.activeOffer = this.offerResults.find((x) => x.id === this.offerId);
      this.activeIndex = this.offerResults.findIndex((x) => x.id === this.offerId);
    });
  }

  slideOffer(index: number, direction: 'prev' | 'next') {
    this.blurAnimate();
    if (direction === 'prev') {
      const SLIDE_PREV_DATA: LawOffer = this.offerResults[index - 1];
      this.router.navigate([CorePath.Find, this.categoryRouteName, SLIDE_PREV_DATA.id]);
      this.activeIndex = index >= 0 ? index - 1 : index;
      this.offerId = SLIDE_PREV_DATA.id;
      this.data = SLIDE_PREV_DATA;
    } else {
      const SLIDE_NEXT_DATA: LawOffer = this.offerResults[index + 1];
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
}
