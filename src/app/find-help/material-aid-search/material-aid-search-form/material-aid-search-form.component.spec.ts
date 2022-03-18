import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { MaterialAidSearchFormComponent } from './material-aid-search-form.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('MaterialAidSearchFormComponent', () => {
  let component: MaterialAidSearchFormComponent;
  let fixture: ComponentFixture<MaterialAidSearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaterialAidSearchFormComponent],
      imports: [TranslateModule.forRoot(), HttpClientTestingModule, FormsModule, RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialAidSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
