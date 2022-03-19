import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MaterialAidResourceService } from '@app/core/api';
import { MaterialAidOffer } from '@app/core/api';
import { CategoryRoutingName } from '@app/shared/models';
import { defaults } from '@app/shared/utils';
// TODO BE adding phoneNumber inprogress
interface MaterialAidOfferPhone extends MaterialAidOffer {
  phoneNumber?: string;
}
@Component({
  selector: 'app-view-offer-material-help',
  templateUrl: './view-offer-material-aid.component.html',
  styleUrls: ['./view-offer-material-aid.component.scss'],
})
export class ViewOfferMaterialAidComponent implements OnInit {
  offerId: number = 0;
  data = defaults<MaterialAidOfferPhone>();
  categoryRouteName = CategoryRoutingName.MATERIAL_HELP;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private materialAidResourceService: MaterialAidResourceService
  ) {}

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

  getListUrl(): string {
    return this.router.url.replace(/\/[^/]+$/, '');
  }

  getMaterialAidOffer() {
    this.materialAidResourceService.getMaterialAid(this.offerId).subscribe((response) => {
      this.data = response;
    });
  }
}
