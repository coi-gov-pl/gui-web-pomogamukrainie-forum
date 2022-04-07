import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-remove-account',
  templateUrl: './confirm-remove-account.component.html',
  styleUrls: ['./confirm-remove-account.component.scss'],
})
export class ConfirmRemoveAccountComponent {
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  @Output() onClosed: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  public confirmAction(confirmed: boolean) {
    this.onClosed.emit(confirmed);
  }
}
