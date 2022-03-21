import { Component, OnInit } from '@angular/core';
import { MyOffersResourceService, Pageable, UserInfo } from '@app/core/api';
import { Observable, take } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import {
  CategoryRoutingName,
  CorePath,
  AccommodationOffer,
  MaterialAidOffer,
  OffersBaseOffer,
  TransportOffer,
} from '@app/shared/models';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmRemoveAdComponent } from '../confirm-remove-ad/confirm-remove-ad.component';
import { StoreUrlService } from '@app/core/store-url/store-url.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss'],
})
export class MyAccountComponent implements OnInit {
  public myAccountPersonalData!: UserInfo;
  public myAnnouncements!: OffersBaseOffer;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private myOffersResource: MyOffersResourceService,
    private dialog: MatDialog,
    private storeUrlService: StoreUrlService
  ) {}

  public async ngOnInit() {
    await this.storeUrlService.setDefaultPaginatorParam();
    this.getMyOffers();
  }

  getMyOffers() {
    const { page, size, sort } = this.route.snapshot.queryParams;

    const pageRequest: Pageable = {
      page,
      size,
      sort,
    };
    (this.myOffersResource.listMyOffers(pageRequest) as Observable<OffersBaseOffer>).subscribe((results) => {
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
