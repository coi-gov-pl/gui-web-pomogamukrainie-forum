import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { ConfirmSessionExpiredComponent } from './confirm-session-expired.component';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [ConfirmSessionExpiredComponent],
  imports: [MatDialogModule, MatIconModule, MatButtonModule, CommonModule, TranslateModule],
  exports: [ConfirmSessionExpiredComponent],
})
export class ConfirmSessionExpiredDialogModule {}
