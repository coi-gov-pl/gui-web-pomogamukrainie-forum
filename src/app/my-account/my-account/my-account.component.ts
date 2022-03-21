import { Component, OnInit } from '@angular/core';
import {
  MyOffersResourceService,
  Pageable,
  UserInfo,
  AccommodationOffer,
  MaterialAidOffer,
  OffersBaseOffer,
  TransportOffer,
} from '@app/core/api';
import { take } from 'rxjs';
import { Router } from '@angular/router';
import { CategoryRoutingName, CorePath } from '@app/shared/models';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmRemoveAdComponent } from '../confirm-remove-ad/confirm-remove-ad.component';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss'],
})
export class MyAccountComponent implements OnInit {
  public myAccountPersonalData!: UserInfo;
  public myAnnouncements!: OffersBaseOffer;
  pageRequest: Pageable = {};
  constructor(private router: Router, private myOffersResource: MyOffersResourceService, private dialog: MatDialog) {}

  public ngOnInit() {
    this.myOffersResource.listMyOffers(this.pageRequest).subscribe((results) => {
      this.myAnnouncements = results;
    });
  }

  removeAnnouncement(announcement: AccommodationOffer | MaterialAidOffer | TransportOffer): void {
    const dialogRef: MatDialogRef<ConfirmRemoveAdComponent> = this.dialog.open(ConfirmRemoveAdComponent, {
      hasBackdrop: false,
      width: '100%',
      maxHeight: '450px',
      maxWidth: '720px',
    });

    dialogRef.componentInstance.currentAnnouncement = announcement;

    dialogRef.componentInstance.onClosed.pipe(take(1)).subscribe((confirmed: boolean) => {
      dialogRef.close();
      if (confirmed) {
        // TODO: call to api
      }
    });
  }

  editAnnouncement(announcement: AccommodationOffer | MaterialAidOffer | TransportOffer): void {
    console.log(announcement);
  }

  public addNewAd(): void {
    this.router.navigate([CorePath.Give, CategoryRoutingName.ACCOMMODATION]);
  }
}
