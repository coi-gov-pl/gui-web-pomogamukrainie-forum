import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { AccommodationSearchFormComponent } from './accommodation-search-form.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AccommodationSearchFormComponent', () => {
  let component: AccommodationSearchFormComponent;
  let fixture: ComponentFixture<AccommodationSearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccommodationSearchFormComponent],
      imports: [TranslateModule.forRoot(), HttpClientTestingModule, FormsModule, RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccommodationSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
