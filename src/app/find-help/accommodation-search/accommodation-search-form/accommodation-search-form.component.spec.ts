import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccommodationSearchFormComponent } from './accommodation-search-form.component';

describe('AccommodationSearchComponent', () => {
  let component: AccommodationSearchFormComponent;
  let fixture: ComponentFixture<AccommodationSearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccommodationSearchFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccommodationSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
