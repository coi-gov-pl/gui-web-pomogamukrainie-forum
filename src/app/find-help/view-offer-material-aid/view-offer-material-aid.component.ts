import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MaterialAidResourceService } from '@app/core/api';
import { MaterialAidOffer } from '@app/core/api';
import { CategoryRoutingName } from '@app/shared/models';
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
  constructor(private route: ActivatedRoute, private materialAidResourceService: MaterialAidResourceService) {}

  ngOnInit(): void {
    this.offerId = Number(this.route.snapshot.paramMap.get('id'));
    this.getMaterialAidOffer();
  }

  getMaterialAidOffer() {
    this.materialAidResourceService.getMaterialAid(this.offerId).subscribe((response) => {
      this.data = response;
    });
  }
}
