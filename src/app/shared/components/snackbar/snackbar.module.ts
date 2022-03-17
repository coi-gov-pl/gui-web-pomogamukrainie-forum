import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SnackAlertComponent } from './snackbar.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
@NgModule({
  declarations: [SnackAlertComponent],
  imports: [MatSnackBarModule, MatIconModule, MatButtonModule, CommonModule],
  exports: [SnackAlertComponent],
})
export class MaterialSnackBarModule {}
