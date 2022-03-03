import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialSupportFormComponent } from './material-support-form.component';

describe('MaterialSupportFormComponent', () => {
  let component: MaterialSupportFormComponent;
  let fixture: ComponentFixture<MaterialSupportFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialSupportFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialSupportFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
