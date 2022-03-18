import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultAttributeComponent } from './search-result-attribute.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('SearchResultAttributeComponent', () => {
  let component: SearchResultAttributeComponent;
  let fixture: ComponentFixture<SearchResultAttributeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchResultAttributeComponent],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultAttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
