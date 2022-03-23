import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APP_BASE_HREF } from '@angular/common';
import { AuthModule } from '@app/core/auth';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { ViewOfferMaterialAidModule } from './view-offer-material-aid.module';

import { ViewOfferMaterialAidComponent } from './view-offer-material-aid.component';

describe('ViewOfferMaterialAidComponent', () => {
  let component: ViewOfferMaterialAidComponent;
  let fixture: ComponentFixture<ViewOfferMaterialAidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewOfferMaterialAidComponent],
      imports: [
        AuthModule,
        HttpClientTestingModule,
        MatSnackBarModule,
        NoopAnimationsModule,
        RouterTestingModule,
        TranslateModule.forRoot(),
        ViewOfferMaterialAidModule,
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
    fixture = TestBed.createComponent(ViewOfferMaterialAidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
