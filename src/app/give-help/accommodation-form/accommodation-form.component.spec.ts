import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { AccommodationFormComponent } from './accommodation-form.component';
import { FormsModule } from '@angular/forms';

describe('AccommodationFormComponent', () => {
  let component: AccommodationFormComponent;
  let fixture: ComponentFixture<AccommodationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccommodationFormComponent],
      imports: [TranslateModule.forRoot(), HttpClientTestingModule, FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccommodationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
