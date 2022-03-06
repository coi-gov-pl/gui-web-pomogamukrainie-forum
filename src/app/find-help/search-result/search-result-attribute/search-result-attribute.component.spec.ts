import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultAttributeComponent } from './search-result-attribute.component';

describe('SearchResultAttributeComponent', () => {
  let component: SearchResultAttributeComponent;
  let fixture: ComponentFixture<SearchResultAttributeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchResultAttributeComponent],
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
