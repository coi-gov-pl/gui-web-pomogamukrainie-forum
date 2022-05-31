import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmSessionExpiredComponent } from './confirm-session-expired.component';

describe('ConfirmSessionExpiredComponent', () => {
  let component: ConfirmSessionExpiredComponent;
  let fixture: ComponentFixture<ConfirmSessionExpiredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfirmSessionExpiredComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmSessionExpiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
