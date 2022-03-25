import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferTitleInputComponent } from './offer-title-input.component';

describe('OfferTitleInputComponent', () => {
  let component: OfferTitleInputComponent;
  let fixture: ComponentFixture<OfferTitleInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OfferTitleInputComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferTitleInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
