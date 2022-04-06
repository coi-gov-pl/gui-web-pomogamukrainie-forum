import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-cancel-dialog',
  templateUrl: './confirm-cancel-dialog.component.html',
  styleUrls: ['./confirm-cancel-dialog.component.scss'],
})
export class ConfirmCancelDialogComponent {
  @Output() confirm: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  confirmAction(confirmed: boolean) {
    this.confirm.emit(confirmed);
  }
}
