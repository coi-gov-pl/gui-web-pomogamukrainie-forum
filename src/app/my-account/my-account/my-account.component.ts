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
import { ALERT_TYPES, CategoryRoutingName, CorePath } from '@app/shared/models';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmRemoveAdComponent } from '../confirm-remove-ad/confirm-remove-ad.component';
import { StoreUrlService } from '@app/core/store-url/store-url.service';
import { SnackbarService } from '@app/shared/services';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss'],
})
export class MyAccountComponent implements OnInit {
  public myAnnouncements!: OffersBaseOffer;
  pageRequest: Pageable = {};
  categoryRoutingName = CategoryRoutingName;
  total?: number = undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private myOffersResource: MyOffersResourceService,
    private dialog: MatDialog,
    private transportResourceService: TransportResourceService,
    private accommodationsResourceService: AccommodationsResourceService,
    private materialAidResourceService: MaterialAidResourceService,
    private storeUrlService: StoreUrlService,
    private snackbarService: SnackbarService
  ) {}

  public async ngOnInit() {
    if (!this.route.snapshot.queryParamMap.keys.includes('page')) {
      await this.storeUrlService.setDefaultPaginatorParam();
    }
    this.getMyOffers();
  }

  getMyOffers() {
    const { page, size, sort } = this.route.snapshot.queryParams;

    this.pageRequest = {
      page,
      size,
      sort,
    };
    this.myOffersResource.listMyOffers(this.pageRequest).subscribe((results) => {
      this.myAnnouncements = results;
      this.total = results.totalElements;
    });
  }

  removeAnnouncement(announcement: AccommodationOffer | MaterialAidOffer | TransportOffer): void {
    const dialogRef: MatDialogRef<ConfirmRemoveAdComponent> = this.dialog.open(ConfirmRemoveAdComponent, {
      hasBackdrop: true,
      width: '100%',
      maxHeight: '450px',
      maxWidth: '720px',
      disableClose: true,
      autoFocus: false,
    });

    dialogRef.componentInstance.currentAnnouncement = announcement;

    dialogRef.componentInstance.onClosed.pipe(take(1)).subscribe((confirmed: boolean) => {
      dialogRef.close();
      if (confirmed) {
        if (announcement.type === TransportOffer.TypeEnum.Transport) {
          this.transportResourceService
            .deleteTransport(announcement.id)
            .pipe(switchMap(() => this.myOffersResource.listMyOffers(this.pageRequest)))
            .subscribe({
              next: (data) => this.onRemoveSuccess(data),
              error: (error) => this.onRemoveError(error.message),
            });
        } else if (announcement.type === AccommodationOffer.TypeEnum.Accommodation) {
          this.accommodationsResourceService
            .deleteAccommodations(announcement.id)
            .pipe(switchMap(() => this.myOffersResource.listMyOffers(this.pageRequest)))
            .subscribe({
              next: (data) => this.onRemoveSuccess(data),
              error: (error) => this.onRemoveError(error.message),
            });
        } else if (announcement.type === MaterialAidOffer.TypeEnum.MaterialAid) {
          this.materialAidResourceService
            .deleteMaterialAid(announcement.id)
            .pipe(switchMap(() => this.myOffersResource.listMyOffers(this.pageRequest)))
            .subscribe({
              next: (data) => this.onRemoveSuccess(data),
              error: (error) => this.onRemoveError(error.message),
            });
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

  private onRemoveSuccess(data: OffersBaseOffer): void {
    this.myAnnouncements = data;
    this.snackbarService.openSnackAlert(ALERT_TYPES.OFFER_REMOVED);
  }

  private onRemoveError(message: string): void {
    this.snackbarService.openSnack(message, ALERT_TYPES.ERROR);
  }
}
