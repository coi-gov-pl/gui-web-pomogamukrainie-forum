import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishAdButtonComponent } from './publish-ad-button.component';

describe('PublishAdButtonComponent', () => {
  let component: PublishAdButtonComponent;
  let fixture: ComponentFixture<PublishAdButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PublishAdButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishAdButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
