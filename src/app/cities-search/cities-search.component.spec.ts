import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslateModule } from '@ngx-translate/core';

import { CitiesSearchComponent } from './cities-search.component';
import { MatAutocomplete } from '@angular/material/autocomplete';

describe('CitiesSearchComponent', () => {
  let component: CitiesSearchComponent;
  let fixture: ComponentFixture<CitiesSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CitiesSearchComponent, MatAutocomplete],
      imports: [TranslateModule.forRoot(), HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitiesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
