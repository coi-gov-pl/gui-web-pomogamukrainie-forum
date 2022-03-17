import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmRemoveAdComponent } from './confirm-remove-ad.component';

describe('ConfirmRemoveAdComponent', () => {
  let component: ConfirmRemoveAdComponent;
  let fixture: ComponentFixture<ConfirmRemoveAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfirmRemoveAdComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmRemoveAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
