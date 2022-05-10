import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccommodationOffer, HealthOffer, JobOffer, LawOffer, MaterialAidOffer, TransportOffer } from '@app/core/api';
import { TranslationsOffer } from 'src/app/find-help/translations-search/translations-search-form/translations-search-form.component';

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
    | TranslationsOffer;
  @Output() confirm: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  public confirmAction(confirmed: boolean) {
    this.confirm.emit(confirmed);
  }
}
