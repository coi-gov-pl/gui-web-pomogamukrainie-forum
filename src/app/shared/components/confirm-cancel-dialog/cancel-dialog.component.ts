import { Component, EventEmitter, Inject, Output, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '@app/shared/models';

@Component({
  selector: 'app-confirm-cancel-dialog',
  templateUrl: './confirm-cancel-dialog.component.html',
  styleUrls: ['./confirm-cancel-dialog.component.scss'],
})
export class ConfirmCancelDialogComponent implements OnInit {
  @Output() confirm: EventEmitter<boolean> = new EventEmitter<boolean>();
  headerText: string = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit() {
    this.headerText = this.data.headerText;
  }
  confirmAction(confirmed: boolean) {
    this.confirm.emit(confirmed);
  }
}
