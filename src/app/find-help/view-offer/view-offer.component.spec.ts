import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOfferComponent } from './view-offer.component';

describe('ViewOfferComponent', () => {
  let component: ViewOfferComponent;
  let fixture: ComponentFixture<ViewOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewOfferComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
