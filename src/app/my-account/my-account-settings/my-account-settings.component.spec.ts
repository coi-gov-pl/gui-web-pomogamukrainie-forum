import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAccountSettingsComponent } from './my-account-settings.component';
import { AuthService } from '@app/core/auth';

describe('MyAccountSettingsComponent', () => {
  let component: MyAccountSettingsComponent;
  let fixture: ComponentFixture<MyAccountSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyAccountSettingsComponent],
      providers: [
        {
          provide: AuthService,
          useValue: {},
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAccountSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
