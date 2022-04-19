import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSearchFormComponent } from './job-search-form.component';

describe('JobSearchFormComponent', () => {
  let component: JobSearchFormComponent;
  let fixture: ComponentFixture<JobSearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobSearchFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
