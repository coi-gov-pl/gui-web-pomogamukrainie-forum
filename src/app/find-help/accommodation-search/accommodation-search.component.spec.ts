import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccommodationSearchComponent } from './accommodation-search.component';

describe('AccommodationSearchComponent', () => {
  let component: AccommodationSearchComponent;
  let fixture: ComponentFixture<AccommodationSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccommodationSearchComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccommodationSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
