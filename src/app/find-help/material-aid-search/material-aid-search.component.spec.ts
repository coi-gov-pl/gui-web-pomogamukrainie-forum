import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialAidSearchComponent } from './material-aid-search.component';

describe('MaterialAidSearchComponent', () => {
  let component: MaterialAidSearchComponent;
  let fixture: ComponentFixture<MaterialAidSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaterialAidSearchComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialAidSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
