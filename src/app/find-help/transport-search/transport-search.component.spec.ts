import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportSearchComponent } from './transport-search.component';

describe('TransportSearchComponent', () => {
  let component: TransportSearchComponent;
  let fixture: ComponentFixture<TransportSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransportSearchComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
