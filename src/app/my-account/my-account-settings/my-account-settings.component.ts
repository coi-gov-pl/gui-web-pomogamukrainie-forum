import { Component, OnInit } from '@angular/core';
import { UserInfo, UsersResourceService } from '@app/core/api';
import { AuthService } from '@app/core/auth';

@Component({
  selector: 'app-my-account-settings',
  templateUrl: './my-account-settings.component.html',
  styleUrls: ['./my-account-settings.component.scss'],
})
export class MyAccountSettingsComponent implements OnInit {
  myAccountPersonalData: UserInfo | undefined;

  constructor(private usersResourceService: UsersResourceService, private readonly authService: AuthService) {}

  ngOnInit(): void {
    this.usersResourceService.meUsers().subscribe((user) => {
      this.myAccountPersonalData = user;
    });
  }

  public changeEmail(): void {
    this.authService.updateProfile();
  }
}
