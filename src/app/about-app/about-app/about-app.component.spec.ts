import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutAppComponent } from './about-app.component';

describe('AboutAppComponent', () => {
  let component: AboutAppComponent;
  let fixture: ComponentFixture<AboutAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutAppComponent],
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
