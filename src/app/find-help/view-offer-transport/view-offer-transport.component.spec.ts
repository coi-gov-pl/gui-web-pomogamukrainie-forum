import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APP_BASE_HREF } from '@angular/common';
import { AuthModule } from '@app/core/auth';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { ViewOfferTransportModule } from './view-offer-transport.module';

import { ViewOfferTransportComponent } from './view-offer-transport.component';

describe('ViewOfferTransportComponent', () => {
  let component: ViewOfferTransportComponent;
  let fixture: ComponentFixture<ViewOfferTransportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewOfferTransportComponent],
      imports: [
        AuthModule,
        HttpClientTestingModule,
        MatSnackBarModule,
        NoopAnimationsModule,
        RouterTestingModule,
        TranslateModule.forRoot(),
        ViewOfferTransportModule,
      ],
      providers: [
        {
          provide: APP_BASE_HREF,
          useValue: '/',
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOfferTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
