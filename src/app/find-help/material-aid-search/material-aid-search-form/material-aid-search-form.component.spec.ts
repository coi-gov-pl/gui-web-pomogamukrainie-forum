import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialAidSearchFormComponent } from './material-aid-search-form.component';

describe('MaterialAidSearchFormComponent', () => {
  let component: MaterialAidSearchFormComponent;
  let fixture: ComponentFixture<MaterialAidSearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaterialAidSearchFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialAidSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
