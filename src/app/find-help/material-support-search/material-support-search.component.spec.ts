import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialSupportSearchComponent } from './material-support-search.component';

describe('MaterialSupportSearchComponent', () => {
  let component: MaterialSupportSearchComponent;
  let fixture: ComponentFixture<MaterialSupportSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaterialSupportSearchComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialSupportSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
