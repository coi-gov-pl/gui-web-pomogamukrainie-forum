import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LegalHelpFormComponent } from './legal-help-form.component';

describe('LegalAssistanceFormComponent', () => {
  let component: LegalHelpFormComponent;
  let fixture: ComponentFixture<LegalHelpFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LegalHelpFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalHelpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
