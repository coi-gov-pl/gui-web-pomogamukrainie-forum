import { Component, Input, OnInit } from '@angular/core';
import { defaults } from '@app/shared/utils';
import { TransportOfferDefinitionDTO } from '@app/core/api/model/transportOfferDefinitionDTO';
import { PREFIXES } from '@app/shared/consts';
import { MessageResourceService } from '@app/core/api/api/messageResource.service';
import { SendMessageDTO } from '@app/core/api';
import { Router } from '@angular/router';
import { SnackbarService } from '@app/shared/services/snackbar.service';
import { ALERT_TYPES, CorePath } from '@app/shared/models';
import { take } from 'rxjs';

@Component({
  selector: 'app-reply-offer',
  templateUrl: './reply-offer.component.html',
  styleUrls: ['./reply-offer.component.scss'],
})
export class ReplyOfferComponent implements OnInit {
  today: Date = new Date();
  data = defaults<SendMessageDTO>();
  @Input() offerId: number = 23;
  @Input() helperPhoneNumber: string = '123 123 123';
  @Input() helperFirstname: string = 'Stanisław';
  showPhoneNumber: boolean = false;
  loading: boolean = false;
  constructor(
    private messageResourceService: MessageResourceService,
    private router: Router,
    private snackbarService: SnackbarService
  ) {}

  ngOnInit(): void {
    // this.offerId = +this.route.snapshot.paramMap.get('id');
    this.data.tosApproved = false;
    this.data.offerId = this.offerId;
  }

  onConsentChange(): void {
    this.data.tosApproved = !!this.data.tosApproved;
  }

  onPhoneNumberClick(): void {
    this.showPhoneNumber = true;
  }

  submitMessage(): void {
    this.loading = true;
    this.messageResourceService
      .sendMessageMessage(this.data)
      .pipe(take(1))
      .subscribe(
        (response) => this.redirectOnSuccess(),
        (error) => this.snackbarService.openSnack(error.message, ALERT_TYPES.ERROR)
      )
      .add(() => (this.loading = false));
  }

  redirectOnSuccess() {
    this.router.navigate([CorePath.MyAccount]).then((navigated: boolean) => {
      if (navigated) {
        this.snackbarService.openSnackAlert(ALERT_TYPES.MESSAGE_SENT);
      }
    });
  }
}
