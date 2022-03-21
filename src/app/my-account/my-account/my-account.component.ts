import { Component, OnInit } from '@angular/core';
import {
  MyOffersResourceService,
  Pageable,
  AccommodationOffer,
  AccommodationsResourceService,
  MaterialAidOffer,
  MaterialAidResourceService,
  OffersBaseOffer,
  TransportOffer,
  TransportResourceService,
} from '@app/core/api';
import { switchMap, take } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryRoutingName, CorePath } from '@app/shared/models';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmRemoveAdComponent } from '../confirm-remove-ad/confirm-remove-ad.component';
import { StoreUrlService } from '@app/core/store-url/store-url.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss'],
})
export class MyAccountComponent implements OnInit {
  public myAnnouncements!: OffersBaseOffer;
  categoryRoutingName = CategoryRoutingName;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private myOffersResource: MyOffersResourceService,
    private dialog: MatDialog,
    private transportResourceService: TransportResourceService,
    private accommodationsResourceService: AccommodationsResourceService,
    private materialAidResourceService: MaterialAidResourceService,
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
    this.myOffersResource.listMyOffers(pageRequest).subscribe((results) => {
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
        if (announcement.type === TransportOffer.TypeEnum.Transport) {
          this.transportResourceService
            // https://jira.sysopspolska.pl/browse/POM-321
            .deleteTransport(announcement.id!)
            .pipe(switchMap(() => this.myOffersResource.listMyOffers(this.pageRequest)))
            .subscribe((data) => (this.myAnnouncements = data));
        } else if (announcement.type === AccommodationOffer.TypeEnum.Accommodation) {
          this.accommodationsResourceService
            // https://jira.sysopspolska.pl/browse/POM-321
            .deleteAccommodations(announcement.id!)
            .pipe(switchMap(() => this.myOffersResource.listMyOffers(this.pageRequest)))
            .subscribe((data) => (this.myAnnouncements = data));
        } else if (announcement.type === MaterialAidOffer.TypeEnum.MaterialAid) {
          this.materialAidResourceService
            // https://jira.sysopspolska.pl/browse/POM-321
            .deleteMaterialAid(announcement.id!)
            .pipe(switchMap(() => this.myOffersResource.listMyOffers(this.pageRequest)))
            .subscribe((data) => (this.myAnnouncements = data));
        }
      }
    });
  }

  editAnnouncement(announcement: AccommodationOffer | MaterialAidOffer | TransportOffer): void {
    // TODO: modify search-result component, now we have buttons inside <a> tag
    console.log(announcement);
  }

  public addNewAd(): void {
    this.router.navigate([CorePath.Give, CategoryRoutingName.ACCOMMODATION]);
  }
}
