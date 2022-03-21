import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccommodationOffer, MaterialAidOffer, TransportOffer } from '@app/core/api';

@Component({
  selector: 'app-confirm-remove-ad',
  templateUrl: './confirm-remove-ad.component.html',
  styleUrls: ['./confirm-remove-ad.component.scss'],
})
export class ConfirmRemoveAdComponent {
  @Input() currentAnnouncement!: AccommodationOffer | MaterialAidOffer | TransportOffer;
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  @Output() onClosed: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  public confirmAction(confirmed: boolean) {
    this.onClosed.emit(confirmed);
  }
}
