import { Component, Input, OnInit } from '@angular/core';
import { defaults } from '@app/shared/utils';
import { TransportOfferDefinitionDTO } from '@app/core/api/model/transportOfferDefinitionDTO';
import { PREFIXES } from '@app/shared/consts';
import { MessageResourceService } from '@app/core/api/api/messageResource.service';
import { SendMessageDTO } from '@app/core/api';

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

  constructor(private messageResourceService: MessageResourceService) {}

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
    this.messageResourceService.sendMessageMessage(this.data).subscribe((response) => {});
  }
}
