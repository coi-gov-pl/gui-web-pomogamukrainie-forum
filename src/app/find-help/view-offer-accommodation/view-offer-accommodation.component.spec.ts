import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOfferAccommodationComponent } from './view-offer-accommodation.component';

describe('ViewOfferAccommodationComponent', () => {
  let component: ViewOfferAccommodationComponent;
  let fixture: ComponentFixture<ViewOfferAccommodationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewOfferAccommodationComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOfferAccommodationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
