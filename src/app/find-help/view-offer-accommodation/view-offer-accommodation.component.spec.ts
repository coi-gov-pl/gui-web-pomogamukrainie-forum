import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APP_BASE_HREF } from '@angular/common';
import { AuthModule } from '@app/core/auth';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { ViewOfferAccommodationModule } from './view-offer-accommodation.module';

import { ViewOfferAccommodationComponent } from './view-offer-accommodation.component';

describe('ViewOfferAccommodationComponent', () => {
  let component: ViewOfferAccommodationComponent;
  let fixture: ComponentFixture<ViewOfferAccommodationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewOfferAccommodationComponent],
      imports: [
        AuthModule,
        HttpClientTestingModule,
        MatSnackBarModule,
        NoopAnimationsModule,
        RouterTestingModule,
        TranslateModule.forRoot(),
        ViewOfferAccommodationModule,
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
    fixture = TestBed.createComponent(ViewOfferAccommodationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
