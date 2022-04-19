import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOfferJobComponent } from './view-offer-job.component';

describe('ViewOfferJobComponent', () => {
  let component: ViewOfferJobComponent;
  let fixture: ComponentFixture<ViewOfferJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewOfferJobComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOfferJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
