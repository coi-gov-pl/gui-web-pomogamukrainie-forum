import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormsModule, NgForm } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import { GiveHelpFormModule } from '../give-help-form.module';

@Component({
  template: ` <form #form="ngForm">
    <app-publish-ad-button></app-publish-ad-button>
  </form>`,
})
class TestFormComponent {
  @ViewChild('form') form!: NgForm;
}

describe('PublishAdButtonComponent', () => {
  let component: TestFormComponent;
  let fixture: ComponentFixture<TestFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestFormComponent],
      imports: [GiveHelpFormModule, NoopAnimationsModule, FormsModule, TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should mark button disabled if form is invalid', () => {
    const control = new FormControl('');
    component.form.form.addControl('new', control);
    const button = getButton();

    expect(button.attributes['disabled']).toBeUndefined();

    control.setErrors({ error: true });
    fixture.detectChanges();

    expect(button.attributes['disabled']).toBeDefined();
  });

  it('should trigger form submit on button click', () => {
    expect(component.form.submitted).toBeFalsy();

    getButton().nativeElement.click();

    expect(component.form.submitted).toBeTrue();
  });

  function getButton() {
    return fixture.debugElement.query(By.css('button'));
  }
});
