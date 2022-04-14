import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UserInfo, UsersResourceService } from '@app/core/api';
import { AuthService } from '@app/core/auth';
import { LocalStorageKeys } from '@app/shared/models';
import { take } from 'rxjs';
import { ConfirmRemoveAccountComponent } from '../confirm-remove-account/confirm-remove-account.component';

@Component({
  selector: 'app-my-account-settings',
  templateUrl: './my-account-settings.component.html',
  styleUrls: ['./my-account-settings.component.scss'],
})
export class MyAccountSettingsComponent implements OnInit {
  myAccountPersonalData: UserInfo | undefined;

  constructor(
    private usersResourceService: UsersResourceService,
    private readonly authService: AuthService,
    private dialog: MatDialog,
    private userService: UsersResourceService
  ) {}

  ngOnInit(): void {
    this.usersResourceService.meUsers().subscribe((user) => {
      this.myAccountPersonalData = user;
    });
  }

  public changeEmail($event: MouseEvent): void {
    $event.preventDefault();
    this.authService.updateProfile();
  }

  removeAccount($event: Event): void {
    $event.preventDefault();
    const dialogRef: MatDialogRef<ConfirmRemoveAccountComponent> = this.dialog.open(ConfirmRemoveAccountComponent, {
      hasBackdrop: true,
      width: '100%',
      maxHeight: '450px',
      maxWidth: '720px',
      disableClose: true,
    });

    dialogRef.componentInstance.confirm.pipe(take(1)).subscribe((confirmed: boolean) => {
      dialogRef.close();
      if (confirmed) {
        this.userService.removeAccountUsers().subscribe(() => {
          localStorage.setItem(LocalStorageKeys.AccountRemoved, 'true');
          this.authService.logOut();
        });
      }
    });
  }
}
