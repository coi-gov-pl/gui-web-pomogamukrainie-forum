import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  AccommodationOfferVM,
  HealthOfferVM,
  JobOfferVM,
  LawOfferVM,
  MaterialAidOfferVM,
  OtherOfferVM,
  TransportOfferVM,
  TranslationOfferVM,
} from '@app/core/api';

@Component({
  selector: 'app-confirm-remove-ad',
  templateUrl: './confirm-remove-ad.component.html',
  styleUrls: ['./confirm-remove-ad.component.scss'],
})
export class ConfirmRemoveAdComponent {
  @Input() currentAnnouncement!:
    | AccommodationOfferVM
    | MaterialAidOfferVM
    | TransportOfferVM
    | HealthOfferVM
    | JobOfferVM
    | LawOfferVM
    | TranslationOfferVM
    | OtherOfferVM;
  @Output() confirm: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  public confirmAction(confirmed: boolean) {
    this.confirm.emit(confirmed);
  }
}
