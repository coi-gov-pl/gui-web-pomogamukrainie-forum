import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccommodationOffer, HealthOffer, JobOffer, LawOffer, MaterialAidOffer, TransportOffer } from '@app/core/api';

@Component({
  selector: 'app-confirm-remove-ad',
  templateUrl: './confirm-remove-ad.component.html',
  styleUrls: ['./confirm-remove-ad.component.scss'],
})
export class ConfirmRemoveAdComponent {
  @Input() currentAnnouncement!:
    | AccommodationOffer
    | MaterialAidOffer
    | TransportOffer
    | HealthOffer
    | JobOffer
    | LawOffer;
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  @Output() onClosed: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  public confirmAction(confirmed: boolean) {
    this.onClosed.emit(confirmed);
  }
}
