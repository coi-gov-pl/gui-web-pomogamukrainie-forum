import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortingHeaderComponent } from './sorting-header.component';

describe('SortingComponent', () => {
  let component: SortingHeaderComponent;
  let fixture: ComponentFixture<SortingHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SortingHeaderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortingHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
