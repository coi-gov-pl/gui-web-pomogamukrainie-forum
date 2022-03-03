import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AccommodationFormComponent} from './accommodation-form.component';

describe('AccommodationFormComponent', () => {
  let component: AccommodationFormComponent;
  let fixture: ComponentFixture<AccommodationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccommodationFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccommodationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
