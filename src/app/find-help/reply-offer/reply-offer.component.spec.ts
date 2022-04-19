import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthModule } from '@app/core/auth';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReplyOfferModule } from './reply-offer.module';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';

import { ReplyOfferComponent } from './reply-offer.component';

describe('ReplyOfferComponent', () => {
  let component: ReplyOfferComponent;
  let fixture: ComponentFixture<ReplyOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReplyOfferComponent],
      imports: [
        AuthModule,
        HttpClientTestingModule,
        MatSnackBarModule,
        NoopAnimationsModule,
        ReplyOfferModule,
        RouterTestingModule,
        TranslateModule.forRoot(),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplyOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
