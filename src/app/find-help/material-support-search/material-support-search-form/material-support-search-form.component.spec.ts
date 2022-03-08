import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialSupportSearchFormComponent } from './material-support-search-form.component';

describe('MaterialSupportSearchFormComponent', () => {
  let component: MaterialSupportSearchFormComponent;
  let fixture: ComponentFixture<MaterialSupportSearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaterialSupportSearchFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialSupportSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
