import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportSearchFormComponent } from './transport-search-form.component';

describe('TransportSearchFormComponent', () => {
  let component: TransportSearchFormComponent;
  let fixture: ComponentFixture<TransportSearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransportSearchFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
