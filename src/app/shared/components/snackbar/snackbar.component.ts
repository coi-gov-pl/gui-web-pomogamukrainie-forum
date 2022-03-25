import { Component, Inject } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { ALERT_TYPES } from '@app/shared/models';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
})
export class SnackAlertComponent {
  ALERT_TYPES = ALERT_TYPES;
  constructor(
    public sbRef: MatSnackBarRef<SnackAlertComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: ALERT_TYPES
  ) {}

  closeModal() {
    this.sbRef.dismiss();
  }
}
