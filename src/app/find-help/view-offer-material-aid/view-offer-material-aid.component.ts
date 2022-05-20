import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MaterialAidOffer, MaterialAidResourceService, Pageable } from '@app/core/api';
import { CategoryRoutingName, CorePath } from '@app/shared/models';
import { defaults } from '@app/shared/utils';
import { MaterialAidOfferSearchCriteria } from '../../core/api/model/materialAidOfferSearchCriteria';

@Component({
  selector: 'app-view-offer-material-help',
  templateUrl: './view-offer-material-aid.component.html',
  styleUrls: ['./view-offer-material-aid.component.scss'],
})
export class ViewOfferMaterialAidComponent implements OnInit {
  offerId: number = 0;
  data = defaults<MaterialAidOffer>();
  categoryRouteName = CategoryRoutingName.MATERIAL_HELP;
  redirectedFromAccount: boolean;
  originalAccountQueryParams?: Params;
  offerResults: MaterialAidOffer[] = [];
  activeOffer: MaterialAidOffer | undefined;
  activeIndex: number = 0;
  blurClass = '';
  searchCriteria = defaults<MaterialAidOfferSearchCriteria>();
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private materialAidResourceService: MaterialAidResourceService
  ) {
    // https://stackoverflow.com/questions/54891110/router-getcurrentnavigation-always-returns-null
    // in constructor, because null will be returned in ngOnInit
    this.redirectedFromAccount = !!this.router.getCurrentNavigation()?.extras?.state?.['redirectFromAccount'];
    this.originalAccountQueryParams = this.router.getCurrentNavigation()?.extras?.state?.['queryParams'];
  }

  ngOnInit(): void {
    this.offerId = Number(this.route.snapshot.paramMap.get('id'));
    this.getMaterialAidOffer();
    this.getResults();
  }

  getMaterialAidOffer() {
    this.materialAidResourceService.getMaterialAid(this.offerId).subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        this.router.navigate([CorePath.Find, this.categoryRouteName, CategoryRoutingName.NOT_FOUND]);
      }
    );
  }

  getResults() {
    this.searchCriteria.category = this.originalAccountQueryParams?.['category'];
    this.searchCriteria.location = this.originalAccountQueryParams?.['location'];

    const PAGEREQUEST: Pageable = {
      page: undefined,
      size: 999999999,
      sort: undefined,
    };

    this.materialAidResourceService.listMaterialAid(PAGEREQUEST, this.searchCriteria).subscribe((results) => {
      this.offerResults = results.content ?? [];
      this.activeOffer = this.offerResults.find((x) => x.id === this.offerId);
      this.activeIndex = this.offerResults.findIndex((x) => x.id === this.offerId);
    });
  }

  slideOffer(index: number, direction: 'prev' | 'next') {
    this.blurAnimate();
    if (direction === 'prev') {
      const SLIDE_PREV_DATA: MaterialAidOffer = this.offerResults[index - 1];
      this.router.navigate([CorePath.Find, this.categoryRouteName, SLIDE_PREV_DATA.id]);
      this.activeIndex = index >= 0 ? index - 1 : index;
      this.offerId = SLIDE_PREV_DATA.id;
      this.data = SLIDE_PREV_DATA;
    } else {
      const SLIDE_NEXT_DATA: MaterialAidOffer = this.offerResults[index + 1];
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
