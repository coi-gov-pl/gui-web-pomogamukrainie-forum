import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LawFormComponent } from './law-form.component';

describe('LegalAssistanceFormComponent', () => {
  let component: LawFormComponent;
  let fixture: ComponentFixture<LawFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LawFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LawFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
