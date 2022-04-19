import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageKeys } from '@app/shared/models';
import { RemoveAccountSuccessComponent } from '../shared';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  constructor(private dialog: MatDialog, private route: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    const { removeAccount } = this.route.snapshot.queryParams;
    if (localStorage.getItem(LocalStorageKeys.AccountRemoved)) {
      localStorage.removeItem(LocalStorageKeys.AccountRemoved);
      const dialogRef: MatDialogRef<RemoveAccountSuccessComponent> = this.dialog.open(RemoveAccountSuccessComponent, {
        panelClass: 'dialog-success',
        hasBackdrop: true,
        width: '100%',
        minHeight: '300px',
        maxHeight: '450px',
        maxWidth: '720px',
        disableClose: true,
      });

      dialogRef.afterClosed().subscribe(() => {
        this.router.navigate([], {
          relativeTo: this.route,
          queryParams: { removeAccount: null },
          queryParamsHandling: 'merge',
        });
      });
    }
  }
}
