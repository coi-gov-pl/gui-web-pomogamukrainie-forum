import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthCareFormComponent } from './health-care-form.component';

describe('HealthCareFormComponent', () => {
  let component: HealthCareFormComponent;
  let fixture: ComponentFixture<HealthCareFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HealthCareFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthCareFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
