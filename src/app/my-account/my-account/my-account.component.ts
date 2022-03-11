import { Component, OnInit } from '@angular/core';
import { OffersBaseOffer } from '@app/core/api';
import { MyAccountPersonalData } from '../my-account.types';
import { MyAccountService } from '../my-account.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss'],
})
export class MyAccountComponent implements OnInit {
  public myAccountPersonalData$: Observable<MyAccountPersonalData> | undefined;
  public myAnnouncements: Array<OffersBaseOffer> = [];
  constructor(private myAccountService: MyAccountService) {}

  public ngOnInit() {
    this.myAccountPersonalData$ = this.myAccountService.getPersonalData();
  }
}
