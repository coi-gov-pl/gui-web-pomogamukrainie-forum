import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccommodationOffer, HealthOffer, JobOffer, LawOffer, MaterialAidOffer, TransportOffer } from '@app/core/api';
import { TranslationOffer } from '@app/core/api/model/translationOffer';

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
    | LawOffer
    | TranslationOffer;
  @Output() confirm: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  public confirmAction(confirmed: boolean) {
    this.confirm.emit(confirmed);
  }
}
