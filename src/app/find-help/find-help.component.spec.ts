import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindHelpComponent } from './find-help.component';

describe('FindHelpComponent', () => {
  let component: FindHelpComponent;
  let fixture: ComponentFixture<FindHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindHelpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
