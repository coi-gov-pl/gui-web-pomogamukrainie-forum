import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { MoreInfoLinkComponent } from './more-info-link.component';

describe('MoreInfoLinkComponent', () => {
  let component: MoreInfoLinkComponent;
  let fixture: ComponentFixture<MoreInfoLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoreInfoLinkComponent],
      imports: [TranslateModule.forRoot()],
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
