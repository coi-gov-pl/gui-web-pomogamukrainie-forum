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
  private _horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  private _verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  private _actionButtonLabel = 'OK';
  private _action = false;
  private _setAutoHide = true;
  private _autoHide = 5000;

  constructor(private snackbar: MatSnackBar) {}

  openSnackAlert(type: ALERT_TYPES) {
    this.snackbar.openFromComponent(SnackAlertComponent, {
      data: type,
      panelClass: 'snackbar-alert',
      duration: 10000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  openSnack(message: string, type: ALERT_TYPES) {
    const config = new MatSnackBarConfig();
    config.verticalPosition = this._verticalPosition;
    config.horizontalPosition = this._horizontalPosition;
    config.duration = this._setAutoHide ? this._autoHide : 0;
    if (type === ALERT_TYPES.ERROR) {
      config.panelClass = ['snack-bar-error'];
    } else if (type === ALERT_TYPES.WARNING) {
      config.panelClass = ['snack-bar-warning'];
    } else if (type === ALERT_TYPES.CONFIRM) {
      config.panelClass = ['snack-bar-confirm'];
    }
    this.snackbar.open(message, this._action ? this._actionButtonLabel : undefined, config);
  }

  set horizontalPosition(value: MatSnackBarHorizontalPosition) {
    this._horizontalPosition = value;
  }

  set verticalPosition(value: MatSnackBarVerticalPosition) {
    this._verticalPosition = value;
  }

  set actionButtonLabel(value: string) {
    this._actionButtonLabel = value;
  }

  set action(value: boolean) {
    this._action = value;
  }

  set setAutoHide(value: boolean) {
    this._setAutoHide = value;
  }

  set autoHide(value: number) {
    this._autoHide = value;
  }
}
