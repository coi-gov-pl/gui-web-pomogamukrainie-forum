import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOfferHealthCareComponent } from './view-offer-health-care.component';

describe('ViewOfferHealthCareComponent', () => {
  let component: ViewOfferHealthCareComponent;
  let fixture: ComponentFixture<ViewOfferHealthCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewOfferHealthCareComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOfferHealthCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
