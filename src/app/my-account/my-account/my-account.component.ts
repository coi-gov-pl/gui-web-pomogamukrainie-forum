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
  LawOffer,
  HealthOffer,
  HealthResourceService,
  JobOffer,
  JobResourceService,
  LawResourceService,
  TranslationResourceService,
  OtherOffer,
  OtherResourceService,
} from '@app/core/api';
import { switchMap, take } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ALERT_TYPES, CategoryRoutingName, CorePath } from '@app/shared/models';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmRemoveAdComponent } from '../confirm-remove-ad/confirm-remove-ad.component';
import { StoreUrlService } from '@app/core/store-url/store-url.service';
import { SnackbarService } from '@app/shared/services';
import { TranslationOffer } from '@app/core/api/model/translationOffer';

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
    private snackbarService: SnackbarService,
    private healthResourceService: HealthResourceService,
    private jobResourceService: JobResourceService,
    private lawResourceService: LawResourceService,
    private translationResourceService: TranslationResourceService,
    private otherResourceService: OtherResourceService
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

  removeAnnouncement(
    announcement:
      | AccommodationOffer
      | MaterialAidOffer
      | TransportOffer
      | HealthOffer
      | JobOffer
      | LawOffer
      | TranslationOffer
      | OtherOffer
  ): void {
    const dialogRef: MatDialogRef<ConfirmRemoveAdComponent> = this.dialog.open(ConfirmRemoveAdComponent, {
      hasBackdrop: true,
      width: '100%',
      maxHeight: '450px',
      maxWidth: '720px',
      autoFocus: false,
    });

    dialogRef.componentInstance.currentAnnouncement = announcement;

    dialogRef.componentInstance.confirm.pipe(take(1)).subscribe((confirmed: boolean) => {
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
        } else if (announcement.type === HealthOffer.TypeEnum.Health) {
          this.healthResourceService
            .deleteHealth(announcement.id)
            .pipe(switchMap(() => this.myOffersResource.listMyOffers(this.pageRequest)))
            .subscribe({
              next: (data) => this.onRemoveSuccess(data),
              error: (error) => this.onRemoveError(error.message),
            });
        } else if (announcement.type === JobOffer.TypeEnum.Job) {
          this.jobResourceService
            .deleteJob(announcement.id)
            .pipe(switchMap(() => this.myOffersResource.listMyOffers(this.pageRequest)))
            .subscribe({
              next: (data) => this.onRemoveSuccess(data),
              error: (error) => this.onRemoveError(error.message),
            });
        } else if (announcement.type === LawOffer.TypeEnum.Law) {
          this.lawResourceService
            .deleteLaw(announcement.id)
            .pipe(switchMap(() => this.myOffersResource.listMyOffers(this.pageRequest)))
            .subscribe({
              next: (data) => this.onRemoveSuccess(data),
              error: (error) => this.onRemoveError(error.message),
            });
        } else if (announcement.type === TranslationOffer.TypeEnum.Translation) {
          this.translationResourceService
            .deleteTranslation(announcement.id)
            .pipe(switchMap(() => this.myOffersResource.listMyOffers(this.pageRequest)))
            .subscribe({
              next: (data) => this.onRemoveSuccess(data),
              error: (error) => this.onRemoveError(error.message),
            });
        } else if (announcement.type === OtherOffer.TypeEnum.Other) {
          this.otherResourceService
            .deleteOther(announcement.id)
            .pipe(switchMap(() => this.myOffersResource.listMyOffers(this.pageRequest)))
            .subscribe({
              next: (data) => this.onRemoveSuccess(data),
              error: (error) => this.onRemoveError(error.message),
            });
        }
      }
    });
  }
  editAnnouncement(
    announcement:
      | AccommodationOffer
      | MaterialAidOffer
      | TransportOffer
      | HealthOffer
      | JobOffer
      | LawOffer
      | TranslationOffer
      | OtherOffer
  ): void {
    // @TODO: extract to separate util
    let categoryRoute;
    switch (announcement.type) {
      case AccommodationOffer.TypeEnum.Accommodation: {
        categoryRoute = CategoryRoutingName.ACCOMMODATION;
        break;
      }
      case MaterialAidOffer.TypeEnum.MaterialAid: {
        categoryRoute = CategoryRoutingName.MATERIAL_HELP;
        break;
      }
      case TransportOffer.TypeEnum.Transport: {
        categoryRoute = CategoryRoutingName.TRANSPORT;
        break;
      }
      case HealthOffer.TypeEnum.Health: {
        categoryRoute = CategoryRoutingName.HEALTH;
        break;
      }
      case JobOffer.TypeEnum.Job: {
        categoryRoute = CategoryRoutingName.JOB;
        break;
      }
      case LawOffer.TypeEnum.Law: {
        categoryRoute = CategoryRoutingName.LEGAL_HELP;
        break;
      }
      case TranslationOffer.TypeEnum.Translation: {
        categoryRoute = CategoryRoutingName.TRANSLATIONS;
        break;
      }
      case OtherOffer.TypeEnum.Other: {
        categoryRoute = CategoryRoutingName.OTHER;
        break;
      }
    }

    this.router.navigate([CorePath.Edit, categoryRoute, announcement.id]);
  }

  public addNewAd(): void {
    this.router.navigate([CorePath.Give, CategoryRoutingName.ACCOMMODATION]);
  }

  private onRemoveSuccess(data: OffersBaseOffer): void {
    this.myAnnouncements = data;
    this.snackbarService.openUpperSnackAlert(ALERT_TYPES.OFFER_REMOVED);
  }

  private onRemoveError(message: string): void {
    this.snackbarService.openBottomSnackAlert(message, ALERT_TYPES.ERROR);
  }
}
