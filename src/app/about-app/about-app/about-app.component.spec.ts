import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutAppModule } from '../about-app.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';

import { AboutAppComponent } from './about-app.component';

describe('AboutAppComponent', () => {
  let component: AboutAppComponent;
  let fixture: ComponentFixture<AboutAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutAppComponent],
      imports: [AboutAppModule, NoopAnimationsModule, RouterTestingModule, TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
