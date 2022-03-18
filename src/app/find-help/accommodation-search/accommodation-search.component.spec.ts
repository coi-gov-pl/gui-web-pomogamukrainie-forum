import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { AccommodationSearchComponent } from './accommodation-search.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AccommodationSearchComponent', () => {
  let component: AccommodationSearchComponent;
  let fixture: ComponentFixture<AccommodationSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccommodationSearchComponent],
      imports: [TranslateModule.forRoot(), HttpClientTestingModule, RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccommodationSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
