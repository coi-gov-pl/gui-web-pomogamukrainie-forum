import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MaterialAidOffer, MaterialAidResourceService } from '@app/core/api';
import { CategoryRoutingName, CorePath } from '@app/shared/models';
import { defaults } from '@app/shared/utils';

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
  }

  getMaterialAidOffer() {
    this.materialAidResourceService.getMaterialAid(this.offerId).subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        this.router.navigate([CorePath.Find, CategoryRoutingName.MATERIAL_HELP, CategoryRoutingName.NOT_FOUND]);
      }
    );
  }
}
