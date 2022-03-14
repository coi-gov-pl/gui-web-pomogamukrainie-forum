import { Component, OnInit } from '@angular/core';
import { OffersBaseOffer } from '@app/core/api';
import { MyAccountPersonalData } from '../my-account.types';
import { MyAccountService } from '../my-account.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CorePath } from '@app/shared/models';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss'],
})
export class MyAccountComponent implements OnInit {
  public myAccountPersonalData$: Observable<MyAccountPersonalData> | undefined;
  public myAnnouncements: Array<OffersBaseOffer> = [];
  constructor(private myAccountService: MyAccountService, private router: Router) {}

  public ngOnInit() {
    this.myAccountPersonalData$ = this.myAccountService.getPersonalData();
  }

  public addNewAd(): void {
    this.router.navigate([CorePath.Give]);
  }
}
