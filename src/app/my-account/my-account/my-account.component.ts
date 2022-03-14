import { Component, OnInit } from '@angular/core';
import {
  AccommodationOffer,
  MaterialAidOffer,
  MyOffersResourceService,
  OffersBaseOffer,
  Pageable,
  TransportOffer,
} from '@app/core/api';
import { MyAccountPersonalData } from '../my-account.types';
import { MyAccountService } from '../my-account.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CorePath } from '@app/shared/models';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss'],
})
export class MyAccountComponent implements OnInit {
  public myAccountPersonalData$: Observable<MyAccountPersonalData> | undefined;
  public myAnnouncements!: OffersBaseOffer;
  pageRequest: Pageable = {};
  constructor(private myAccountService: MyAccountService, private router: Router, private myOffersResource: MyOffersResourceService) {}

  public ngOnInit() {
    this.myAccountPersonalData$ = this.myAccountService.getPersonalData();
    this.myOffersResource.listMyOffers(this.pageRequest).subscribe((results) => {
      this.myAnnouncements = results;
    });
  }

  removeAnnouncement(announcement: AccommodationOffer | MaterialAidOffer | TransportOffer): void {
    console.log(announcement);
  }

  editAnnouncement(announcement: AccommodationOffer | MaterialAidOffer | TransportOffer): void {
    console.log(announcement);
  }

  public addNewAd(): void {
    this.router.navigate([CorePath.Give]);
  }
}
