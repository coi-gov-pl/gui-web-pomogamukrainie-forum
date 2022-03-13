import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MyAccountPersonalData } from './my-account.types';

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
