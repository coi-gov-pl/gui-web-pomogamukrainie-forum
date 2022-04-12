import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { SnackAlertComponent } from '../components/snackbar/snackbar.component';
import { ALERT_TYPES } from '../models';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  actionButtonLabel = 'OK';
  action = false;
  setAutoHide = true;
  autoHide = 5000;

  constructor(private snackbar: MatSnackBar) {}

  openUpperSnackAlert(type: ALERT_TYPES, link?: string) {
    this.snackbar.openFromComponent(SnackAlertComponent, {
      data: {
        type: type,
        link: link,
      },
      panelClass: 'snackbar-alert',
      duration: 10000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  openBottomSnackAlert(message: string, type: ALERT_TYPES) {
    const config = new MatSnackBarConfig();
    config.verticalPosition = this.verticalPosition;
    config.horizontalPosition = this.horizontalPosition;
    config.duration = this.setAutoHide ? this.autoHide : 0;
    if (type === ALERT_TYPES.ERROR) {
      config.panelClass = ['snack-bar-error'];
    } else if (type === ALERT_TYPES.WARNING) {
      config.panelClass = ['snack-bar-warning'];
    } else if (type === ALERT_TYPES.CONFIRM) {
      config.panelClass = ['snack-bar-confirm'];
    }
    this.snackbar.open(message, this.action ? this.actionButtonLabel : undefined, config);
  }
}
