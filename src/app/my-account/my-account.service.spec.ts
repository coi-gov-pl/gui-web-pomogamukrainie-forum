import { TestBed } from '@angular/core/testing';

import { MyAccountService } from './my-account.service';

describe('MyAccountService', () => {
  let service: MyAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyAccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
