import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { MaterialAidSearchComponent } from './material-aid-search.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('MaterialAidSearchComponent', () => {
  let component: MaterialAidSearchComponent;
  let fixture: ComponentFixture<MaterialAidSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaterialAidSearchComponent],
      imports: [TranslateModule.forRoot(), HttpClientTestingModule, RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialAidSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
