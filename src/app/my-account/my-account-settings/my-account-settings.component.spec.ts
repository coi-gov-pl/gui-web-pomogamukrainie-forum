import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthModule } from '@app/core/auth';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { MyAccountSettingsComponent } from './my-account-settings.component';

describe('MyAccountSettingsComponent', () => {
  let component: MyAccountSettingsComponent;
  let fixture: ComponentFixture<MyAccountSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyAccountSettingsComponent],
      imports: [AuthModule, HttpClientTestingModule],
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
