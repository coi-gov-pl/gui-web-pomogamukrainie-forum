import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { AccommodationOfferComponent } from './accommodation-offer.component';

describe('AccommodationOfferComponent', () => {
  let component: AccommodationOfferComponent;
  let fixture: ComponentFixture<AccommodationOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccommodationOfferComponent],
      imports: [TranslateModule.forRoot(), HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccommodationOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
