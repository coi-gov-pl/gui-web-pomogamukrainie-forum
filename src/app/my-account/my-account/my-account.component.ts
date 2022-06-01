import { Component, OnInit } from '@angular/core';
import {
  MyOffersResourceService,
  Pageable,
  AccommodationOfferVM,
  AccommodationsResourceService,
  MaterialAidOfferVM,
  MaterialAidResourceService,
  OffersVMBaseOfferVM,
  TransportOfferVM,
  TransportResourceService,
  LawOfferVM,
  HealthOfferVM,
  HealthResourceService,
  JobOfferVM,
  JobResourceService,
  LawResourceService,
  TranslationResourceService,
  OtherOfferVM,
  OtherResourceService,
} from '@app/core/api';
import { switchMap, take } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ALERT_TYPES, CategoryRoutingName, CorePath } from '@app/shared/models';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmRemoveAdComponent } from '../confirm-remove-ad/confirm-remove-ad.component';
import { StoreUrlService } from '@app/core/store-url/store-url.service';
import { SnackbarService } from '@app/shared/services';
import { TranslationOfferVM } from '@app/core/api/model/translationOfferVM';
import { AuthService } from '@app/core/auth';
import { UrlHelperService } from '@app/core/url';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss'],
})
export class MyAccountComponent implements OnInit {
  public myAnnouncements!: OffersVMBaseOfferVM;
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
    private otherResourceService: OtherResourceService,
    private readonly authService: AuthService,
    protected urlHelperService: UrlHelperService
  ) {}

  public async ngOnInit() {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate([this.urlHelperService.basePath(true)]);
    }
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
      | AccommodationOfferVM
      | MaterialAidOfferVM
      | TransportOfferVM
      | HealthOfferVM
      | JobOfferVM
      | LawOfferVM
      | TranslationOfferVM
      | OtherOfferVM
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
        if (announcement.type === TransportOfferVM.TypeEnum.Transport) {
          this.transportResourceService
            .deleteTransport(announcement.id)
            .pipe(switchMap(() => this.myOffersResource.listMyOffers(this.pageRequest)))
            .subscribe({
              next: (data) => this.onRemoveSuccess(data),
              error: (error) => this.onRemoveError(error.message),
            });
        } else if (announcement.type === AccommodationOfferVM.TypeEnum.Accommodation) {
          this.accommodationsResourceService
            .deleteAccommodations(announcement.id)
            .pipe(switchMap(() => this.myOffersResource.listMyOffers(this.pageRequest)))
            .subscribe({
              next: (data) => this.onRemoveSuccess(data),
              error: (error) => this.onRemoveError(error.message),
            });
        } else if (announcement.type === MaterialAidOfferVM.TypeEnum.MaterialAid) {
          this.materialAidResourceService
            .deleteMaterialAid(announcement.id)
            .pipe(switchMap(() => this.myOffersResource.listMyOffers(this.pageRequest)))
            .subscribe({
              next: (data) => this.onRemoveSuccess(data),
              error: (error) => this.onRemoveError(error.message),
            });
        } else if (announcement.type === HealthOfferVM.TypeEnum.Health) {
          this.healthResourceService
            .deleteHealth(announcement.id)
            .pipe(switchMap(() => this.myOffersResource.listMyOffers(this.pageRequest)))
            .subscribe({
              next: (data) => this.onRemoveSuccess(data),
              error: (error) => this.onRemoveError(error.message),
            });
        } else if (announcement.type === JobOfferVM.TypeEnum.Job) {
          this.jobResourceService
            .deleteJob(announcement.id)
            .pipe(switchMap(() => this.myOffersResource.listMyOffers(this.pageRequest)))
            .subscribe({
              next: (data) => this.onRemoveSuccess(data),
              error: (error) => this.onRemoveError(error.message),
            });
        } else if (announcement.type === LawOfferVM.TypeEnum.Law) {
          this.lawResourceService
            .deleteLaw(announcement.id)
            .pipe(switchMap(() => this.myOffersResource.listMyOffers(this.pageRequest)))
            .subscribe({
              next: (data) => this.onRemoveSuccess(data),
              error: (error) => this.onRemoveError(error.message),
            });
        } else if (announcement.type === TranslationOfferVM.TypeEnum.Translation) {
          this.translationResourceService
            .deleteTranslation(announcement.id)
            .pipe(switchMap(() => this.myOffersResource.listMyOffers(this.pageRequest)))
            .subscribe({
              next: (data) => this.onRemoveSuccess(data),
              error: (error) => this.onRemoveError(error.message),
            });
        } else if (announcement.type === OtherOfferVM.TypeEnum.Other) {
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
      | AccommodationOfferVM
      | MaterialAidOfferVM
      | TransportOfferVM
      | HealthOfferVM
      | JobOfferVM
      | LawOfferVM
      | TranslationOfferVM
      | OtherOfferVM
  ): void {
    // @TODO: extract to separate util
    let categoryRoute;
    switch (announcement.type) {
      case AccommodationOfferVM.TypeEnum.Accommodation: {
        categoryRoute = CategoryRoutingName.ACCOMMODATION;
        break;
      }
      case MaterialAidOfferVM.TypeEnum.MaterialAid: {
        categoryRoute = CategoryRoutingName.MATERIAL_HELP;
        break;
      }
      case TransportOfferVM.TypeEnum.Transport: {
        categoryRoute = CategoryRoutingName.TRANSPORT;
        break;
      }
      case HealthOfferVM.TypeEnum.Health: {
        categoryRoute = CategoryRoutingName.HEALTH;
        break;
      }
      case JobOfferVM.TypeEnum.Job: {
        categoryRoute = CategoryRoutingName.JOB;
        break;
      }
      case LawOfferVM.TypeEnum.Law: {
        categoryRoute = CategoryRoutingName.LEGAL_HELP;
        break;
      }
      case TranslationOfferVM.TypeEnum.Translation: {
        categoryRoute = CategoryRoutingName.TRANSLATIONS;
        break;
      }
      case OtherOfferVM.TypeEnum.Other: {
        categoryRoute = CategoryRoutingName.OTHER;
        break;
      }
    }

    this.router.navigate([CorePath.Edit, categoryRoute, announcement.id]);
  }

  public addNewAd(): void {
    this.router.navigate([CorePath.Give, CategoryRoutingName.ACCOMMODATION]);
  }

  private onRemoveSuccess(data: OffersVMBaseOfferVM): void {
    this.myAnnouncements = data;
    this.snackbarService.openUpperSnackAlert(ALERT_TYPES.OFFER_REMOVED);
  }

  private onRemoveError(message: string): void {
    this.snackbarService.openBottomSnackAlert(message, ALERT_TYPES.ERROR);
  }
}
