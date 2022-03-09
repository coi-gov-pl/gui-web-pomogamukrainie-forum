import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';

import { TypeOfHelpComponent } from './type-of-help.component';

describe('TypeOfHelpComponent', () => {
  let component: TypeOfHelpComponent;
  let fixture: ComponentFixture<TypeOfHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TypeOfHelpComponent],
      imports: [TranslateModule.forRoot(), RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeOfHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
