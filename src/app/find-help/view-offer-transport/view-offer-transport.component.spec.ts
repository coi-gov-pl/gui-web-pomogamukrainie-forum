import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOfferTransportComponent } from './view-offer-transport.component';

describe('ViewOfferTransportComponent', () => {
  let component: ViewOfferTransportComponent;
  let fixture: ComponentFixture<ViewOfferTransportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewOfferTransportComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOfferTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
