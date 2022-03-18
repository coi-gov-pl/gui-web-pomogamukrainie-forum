import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { TransportSearchComponent } from './transport-search.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('TransportSearchComponent', () => {
  let component: TransportSearchComponent;
  let fixture: ComponentFixture<TransportSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransportSearchComponent],
      imports: [TranslateModule.forRoot(), HttpClientTestingModule, RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
