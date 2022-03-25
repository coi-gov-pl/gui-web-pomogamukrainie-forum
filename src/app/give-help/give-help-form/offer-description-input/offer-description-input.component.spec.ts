import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferDescriptionInputComponent } from './offer-description-input.component';

describe('OfferDescriptionInputComponent', () => {
  let component: OfferDescriptionInputComponent;
  let fixture: ComponentFixture<OfferDescriptionInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OfferDescriptionInputComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferDescriptionInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
