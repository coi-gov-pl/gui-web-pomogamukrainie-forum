import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferPhoneNumberInputComponent } from './offer-phone-number-input.component';

describe('OfferPhoneNumberInputComponent', () => {
  let component: OfferPhoneNumberInputComponent;
  let fixture: ComponentFixture<OfferPhoneNumberInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OfferPhoneNumberInputComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferPhoneNumberInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
