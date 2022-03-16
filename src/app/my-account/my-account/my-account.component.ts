import { Component, OnInit } from '@angular/core';
import {
  AccommodationOffer,
  MaterialAidOffer,
  MyOffersResourceService,
  OffersBaseOffer,
  Pageable,
  TransportOffer,
  UserInfo,
  UsersResourceService,
} from '@app/core/api';
import { Observable, switchMap, tap } from 'rxjs';
import { Router } from '@angular/router';
import { CategoryRoutingName, CorePath } from '@app/shared/models';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss'],
})
export class MyAccountComponent implements OnInit {
  public myAccountPersonalData: UserInfo | undefined;
  public myAnnouncements!: OffersBaseOffer;
  pageRequest: Pageable = {};
  constructor(
    private usersResourceService: UsersResourceService,
    private router: Router,
    private myOffersResource: MyOffersResourceService
  ) {}

  public ngOnInit() {
    this.myOffersResource
      .listMyOffers(this.pageRequest)
      .pipe(
        tap((results) => (this.myAnnouncements = results)),
        switchMap(() => {
          return this.usersResourceService.meUsers();
        })
      )
      .subscribe((data) => {
        this.myAccountPersonalData = data;
      });
  }

  removeAnnouncement(announcement: AccommodationOffer | MaterialAidOffer | TransportOffer): void {
    console.log(announcement);
  }

  editAnnouncement(announcement: AccommodationOffer | MaterialAidOffer | TransportOffer): void {
    console.log(announcement);
  }

  public addNewAd(): void {
    this.router.navigate([CorePath.Give, CategoryRoutingName.ACCOMMODATION]);
  }
}
