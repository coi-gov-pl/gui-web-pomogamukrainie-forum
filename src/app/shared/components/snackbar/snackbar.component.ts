import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA, MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
interface Alert {
  header?: string;
  content?: string;
}
@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
})
export class SnackbarComponent {
  //   constructor(public sbRef: MatSnackBarRef<SnackbarComponent>, @Inject(MAT_SNACK_BAR_DATA) public data: any) {}
  //   // ngOnInit() {}
  // }
  data: Partial<Alert> = {};

  configSuccess: MatSnackBarConfig = {
    panelClass: 'style-success',
    duration: 10000,
    horizontalPosition: 'right',
    verticalPosition: 'top',
  };

  constructor(public snackBar: MatSnackBar) {}

  openSnackBar(data: string, component: any) {
    this.snackBar.openFromComponent(SnackAlertComponent, {
      data: data,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: 'custom-style',
    });
  }
}

@Component({
  selector: 'app-snackbar-snack',
  templateUrl: './snackbar.component.html',
})
export class SnackAlertComponent {
  constructor(public sbRef: MatSnackBarRef<SnackAlertComponent>, @Inject(MAT_SNACK_BAR_DATA) public data: Alert) {}
}
