import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Inject } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { Alert } from '@app/shared/models/temporary-models';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  animations: [
    trigger('state', [
      transition(':enter', [
        style({ bottom: '-100px', transform: 'translate(-50%, 0%) scale(0.3)' }),
        animate(
          '400ms cubic-bezier(0, 0, 0.2, 1)',
          style({
            transform: 'translate(-50%, 0%) scale(1)',
            opacity: 1,
            bottom: '20px',
          })
        ),
      ]),
      transition(':leave', [
        animate(
          '400ms cubic-bezier(0.4, 0.0, 1, 1)',
          style({
            transform: 'translate(-50%, 0%) scale(0.3)',
            opacity: 0,
            bottom: '-100px',
          })
        ),
      ]),
    ]),
  ],
})
export class SnackAlertComponent {
  constructor(public sbRef: MatSnackBarRef<SnackAlertComponent>, @Inject(MAT_SNACK_BAR_DATA) public data: Alert) {}
}
