import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { defaults } from '@app/shared/utils';
import { SendMessageDTO, MessageResourceService } from '@app/core/api';
import { SnackbarService } from '@app/shared/services';
import { ALERT_TYPES } from '@app/shared/models';
import { AuthService } from '@app/core/auth';
import { environment } from 'src/environments/environment';
import { RecaptchaLoaderService, ReCaptchaV3Service } from 'ng-recaptcha';
import { Subject, Subscription, take, takeUntil } from 'rxjs';

@Component({
  selector: 'app-reply-offer',
  templateUrl: './reply-offer.component.html',
  styleUrls: ['./reply-offer.component.scss'],
})
export class ReplyOfferComponent implements OnInit, OnDestroy, AfterViewInit {
  today: Date = new Date();
  data = defaults<SendMessageDTO>();
  @Input() offerId!: number;
  @Input() helpersPhoneNumber?: string | undefined;
  @Input() helpersFirstname: string | undefined;
  showPhoneNumber: boolean = false;
  loading: boolean = false;

  /** captcha */
  @ViewChild('captchaContainer', { read: ElementRef }) public captchaContainer!: ElementRef<HTMLDivElement>;
  widgetId: number | null = null;
  captchaToken!: string;
  subCaptcha$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private messageResourceService: MessageResourceService,
    private snackbarService: SnackbarService,
    public readonly authService: AuthService,
    private readonly reCaptchaV3Service: ReCaptchaV3Service,
    private recaptchaLoaderService: RecaptchaLoaderService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    // we do nothing, service must be included
    this.reCaptchaV3Service.onExecute.pipe(takeUntil(this.subCaptcha$)).subscribe();
    this.data.tosApproved = this.authService.isLoggedIn();
    this.data.offerId = this.offerId;
  }

  ngAfterViewInit(): void {
    this.recaptchaLoaderService.ready.pipe(takeUntil(this.subCaptcha$)).subscribe(() => this.showCaptcha());
  }

  onConsentChange(): void {
    this.data.tosApproved = !!this.data.tosApproved;
  }

  onPhoneNumberClick(): void {
    this.showPhoneNumber = true;
  }

  resetCaptcha(): void {
    if ('grecaptcha' in window) {
      grecaptcha.enterprise.reset(this.widgetId as number);
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
        callback: (token: string) => {
          this.captchaToken = token;
          this.cdr.detectChanges();
        },
        'error-callback': () => (this.captchaToken = ''),
        'expired-callback': () => (this.captchaToken = ''),
      });
    }
  }

  submitMessage(): void {
    if (this.existWidgetAndToken()) {
      this.sendMessage();
    }
  }

  sendMessage(): void {
    this.loading = true;
    this.data.recaptchaResponse = this.captchaToken;
    this.messageResourceService
      .sendMessageMessage(this.data)
      .subscribe(
        () => this.snackbarService.openSnackAlert(ALERT_TYPES.MESSAGE_SENT),
        () => this.resetCaptcha()
      )
      .add(() => {
        this.loading = false;
      });
  }

  ngOnDestroy(): void {
    this.subCaptcha$.next(true);
    this.subCaptcha$.unsubscribe();
  }
}
