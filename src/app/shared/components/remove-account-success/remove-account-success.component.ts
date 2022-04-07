import { Component, EventEmitter, NgModule, Output } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-remove-account-success',
  templateUrl: './remove-account-success.component.html',
  styleUrls: ['./remove-account-success.component.scss'],
})
export class RemoveAccountSuccessComponent {
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  @Output() onClosed: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}
}

@NgModule({
  declarations: [RemoveAccountSuccessComponent],
  imports: [MatIconModule, TranslateModule, MatDialogModule],
  exports: [RemoveAccountSuccessComponent],
})
export class RemoveAccountSuccessModule {}
