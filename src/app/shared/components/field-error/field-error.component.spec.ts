import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldErrorModule } from './field-error.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { FieldErrorComponent } from './field-error.component';

describe('FieldErrorComponent', () => {
  let component: FieldErrorComponent;
  let fixture: ComponentFixture<FieldErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FieldErrorComponent],
      imports: [FieldErrorModule, NoopAnimationsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
