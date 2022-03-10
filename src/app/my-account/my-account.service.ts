import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MyAccountPersonalData } from '../../api/model/my-account-personal-data';

@Injectable({
  providedIn: 'root',
})
export class MyAccountService {
  constructor() {}

  public getPersonalData(): Observable<MyAccountPersonalData> {
    return of({
      name: 'Paweł',
      email: 'kowalski.pawel@gmail.com',
    });
  }
}
