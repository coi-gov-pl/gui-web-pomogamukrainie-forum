import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { defaults } from '@app/shared/utils';
import { SendMessageDTO, MessageResourceService } from '@app/core/api';
import { SnackbarService } from '@app/shared/services';
import { ALERT_TYPES } from '@app/shared/models';
import { take } from 'rxjs/operators';
import { AuthService } from '@app/core/auth';
import { environment } from 'src/environments/environment';

declare var grecaptcha: any;

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

  @ViewChild('captchaContainer', { read: ElementRef }) public captchaContainer!: ElementRef<HTMLDivElement>;
  widgetId: number | null = null;
  captchaToken!: string;

  constructor(
    private messageResourceService: MessageResourceService,
    private snackbarService: SnackbarService,
    public readonly authService: AuthService
  ) {}

  ngOnInit(): void {
    this.data.tosApproved = this.authService.isLoggedIn();
    this.data.offerId = this.offerId;
  }

  onConsentChange(): void {
    this.data.tosApproved = !!this.data.tosApproved;
  }

  onPhoneNumberClick(): void {
    if (this.existWidgetAndToken()) {
      this.showPhoneNumber = true;
    } else {
      this.showCaptcha();
    }
  }

  resetCaptcha(): void {
    if ('grecaptcha' in window) {
      grecaptcha.enterprise.reset(this.widgetId);
    }
    this.captchaToken = '';
  }

  existWidgetAndToken() {
    return this.widgetId !== null && this.captchaToken;
  }

  showCaptcha(): void {
    if (this.widgetId === null && 'grecaptcha' in window) {
      this.widgetId = grecaptcha.enterprise.render(this.captchaContainer.nativeElement, {
        sitekey: environment.recaptcha.siteKey,
        callback: (token: string) => (this.captchaToken = token),
        'error-callback': () => (this.captchaToken = ''),
        'expired-callback': () => (this.captchaToken = ''),
      });
    }
  }

  submitMessage(): void {
    if (this.existWidgetAndToken()) {
      this.sendMessage(this.captchaToken);
    } else {
      this.showCaptcha();
    }
  }

  sendMessage(token: string): void {
    this.loading = true;
    this.messageResourceService
      .sendMessageMessage(this.data, token)
      .pipe(take(1))
      .subscribe(
        () => this.snackbarService.openSnackAlert(ALERT_TYPES.MESSAGE_SENT),
        () => this.resetCaptcha()
      )
      .add(() => {
        this.loading = false;
      });
  }
}
