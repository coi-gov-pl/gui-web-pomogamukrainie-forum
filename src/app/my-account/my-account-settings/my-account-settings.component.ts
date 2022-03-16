import { Component, Input } from '@angular/core';
import { UserInfo } from '@app/core/api';
import { AuthService } from '@app/core/auth';

@Component({
  selector: 'app-my-account-settings',
  templateUrl: './my-account-settings.component.html',
  styleUrls: ['./my-account-settings.component.scss'],
})
export class MyAccountSettingsComponent {
  @Input() public myAccountPersonalData: UserInfo | null | undefined;

  constructor(private readonly authService: AuthService) {}

  public changeEmail(): void {
    this.authService.updateProfile();
  }
}
