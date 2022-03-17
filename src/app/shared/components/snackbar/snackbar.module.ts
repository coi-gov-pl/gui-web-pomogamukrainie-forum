import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SnackAlertComponent, SnackbarComponent } from './snackbar.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
@NgModule({
  declarations: [SnackAlertComponent, SnackbarComponent],
  imports: [MatSnackBarModule, MatIconModule, MatButtonModule, CommonModule],
  exports: [SnackAlertComponent, SnackbarComponent],
})
export class MaterialSnackBarModule {}
