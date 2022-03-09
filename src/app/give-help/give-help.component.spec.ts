import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { GiveHelpComponent } from './give-help.component';

describe('GiveHelpComponent', () => {
  let component: GiveHelpComponent;
  let fixture: ComponentFixture<GiveHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GiveHelpComponent],
      imports: [TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
