import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MaterialAidOffer, MaterialAidResourceService } from '@app/core/api';
import { CategoryRoutingName, CorePath } from '@app/shared/models';
import { defaults } from '@app/shared/utils';
import { StoreUrlService } from '@app/core/store-url/store-url.service';

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
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private materialAidResourceService: MaterialAidResourceService,
    private storeUrlService: StoreUrlService
  ) {
    this.redirectedFromAccount = this.router.getCurrentNavigation()?.extras?.state!['redirectFromAccount'];
  }

  ngOnInit(): void {
    this.offerId = Number(this.route.snapshot.paramMap.get('id'));
    this.getMaterialAidOffer();
  }

  copyUrl() {
    navigator.clipboard
      .writeText(this.router.url)
      .then()
      .catch((e) => console.error(e));
  }

  navigateBack(): void {
    if (this.redirectedFromAccount) {
      this.router.navigate(['/', CorePath.MyAccount]);
    } else {
      this.router.navigate([this.router.url.replace(/\/[^/]+$/, '')], {
        queryParams: this.storeUrlService.getParams(this.categoryRouteName),
      });
    }
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
