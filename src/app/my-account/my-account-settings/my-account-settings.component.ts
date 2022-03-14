import { Component, Input } from '@angular/core';
import { UserInfo } from '@app/core/api';

@Component({
  selector: 'app-my-account-settings',
  templateUrl: './my-account-settings.component.html',
  styleUrls: ['./my-account-settings.component.scss'],
})
export class MyAccountSettingsComponent {
  @Input() public myAccountPersonalData: UserInfo | null | undefined;

  constructor() {}
}
