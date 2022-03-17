import { Component, Inject } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { Alert } from '@app/shared/models/temporary-models';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
})
export class SnackAlertComponent {
  constructor(public sbRef: MatSnackBarRef<SnackAlertComponent>, @Inject(MAT_SNACK_BAR_DATA) public data: Alert) {}
}
