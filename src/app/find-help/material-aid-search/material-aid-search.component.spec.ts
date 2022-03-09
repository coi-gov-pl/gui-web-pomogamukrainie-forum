import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { MaterialAidSearchComponent } from './material-aid-search.component';

describe('MaterialAidSearchComponent', () => {
  let component: MaterialAidSearchComponent;
  let fixture: ComponentFixture<MaterialAidSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaterialAidSearchComponent],
      imports: [TranslateModule.forRoot(), HttpClientTestingModule],
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
