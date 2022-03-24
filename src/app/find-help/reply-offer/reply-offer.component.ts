import { Component, Input, OnInit } from '@angular/core';
import { defaults } from '@app/shared/utils';
import { SendMessageDTO, MessageResourceService } from '@app/core/api';
import { SnackbarService } from '@app/shared/services';
import { ALERT_TYPES, LocalStorageKeys } from '@app/shared/models';
import { switchMap, take } from 'rxjs';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { AuthService } from '@app/core/auth';
import { TranslateService } from '@ngx-translate/core';
import { LanguageCode } from '@app/core/translations';

@Component({
  selector: 'app-reply-offer',
  templateUrl: './reply-offer.component.html',
  styleUrls: ['./reply-offer.component.scss'],
})
export class ReplyOfferComponent implements OnInit {
  today: Date = new Date();
  data = defaults<SendMessageDTO>();
  @Input() offerId!: number;
  @Input() helpersPhoneNumber?: string | undefined;
  @Input() helpersFirstname: string | undefined;
  showPhoneNumber: boolean = false;
  loading: boolean = false;
  currentLang: LanguageCode = LanguageCode.pl_PL;
  LanguageCode = LanguageCode;
  constructor(
    private messageResourceService: MessageResourceService,
    private snackbarService: SnackbarService,
    private reCaptchaV3Service: ReCaptchaV3Service,
    public readonly authService: AuthService,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.data.tosApproved = this.authService.isLoggedIn() ? true : false;
    this.data.offerId = this.offerId;
    this.currentLang = this.translateService.store.currentLang as LanguageCode;
  }

  onConsentChange(): void {
    this.data.tosApproved = !!this.data.tosApproved;
  }

  onPhoneNumberClick(): void {
    this.showPhoneNumber = true;
  }

  submitMessage(): void {
    this.loading = true;

    this.reCaptchaV3Service
      .execute('sendMessageMessage')
      .pipe(
        switchMap((captchaToken) => {
          return this.messageResourceService.sendMessageMessage(this.data, captchaToken);
        })
      )
      .pipe(take(1))
      .subscribe(
        (response) => this.snackbarService.openSnackAlert(ALERT_TYPES.MESSAGE_SENT),
        (error) => this.snackbarService.openSnack(error.message, ALERT_TYPES.ERROR)
      )
      .add(() => {
        this.loading = false;
      });
  }
}
