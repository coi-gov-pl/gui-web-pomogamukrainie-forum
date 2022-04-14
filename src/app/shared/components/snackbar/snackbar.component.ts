import { Component, Inject } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ALERT_TYPES } from '@app/shared/models';
import { SNACKBAR_DATA } from '../../models/snackbar.model';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
})
export class SnackAlertComponent {
  ALERT_TYPES = ALERT_TYPES;
  constructor(
    private router: Router,
    public sbRef: MatSnackBarRef<SnackAlertComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: SNACKBAR_DATA
  ) {}

  closeModal() {
    this.sbRef.dismiss();
  }

  redirectToPath(link: string) {
    this.router.navigateByUrl(link);
  }
}
