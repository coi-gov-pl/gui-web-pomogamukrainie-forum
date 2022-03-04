import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreInfoLinkComponent } from './more-info-link.component';

describe('MoreInfoLinkComponent', () => {
  let component: MoreInfoLinkComponent;
  let fixture: ComponentFixture<MoreInfoLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoreInfoLinkComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreInfoLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
