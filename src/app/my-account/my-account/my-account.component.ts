import { Component, OnInit } from '@angular/core';
import { OffersBaseOffer, UserInfo, UsersResourceService } from '@app/core/api';
import { catchError, Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { CorePath } from '@app/shared/models';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss'],
})
export class MyAccountComponent implements OnInit {
  public myAccountPersonalData$: Observable<UserInfo> | null | undefined;
  public myAnnouncements: Array<OffersBaseOffer> = [];
  constructor(private usersResourceService: UsersResourceService, private router: Router) {}

  public ngOnInit() {
    this.myAccountPersonalData$ = this.usersResourceService.meUsers().pipe(
      catchError(() => {
        return of({
          firstName: 'empty name',
          email: 'empty mail',
        });
      })
    );
  }

  public addNewAd(): void {
    this.router.navigate([CorePath.Give]);
  }
}
