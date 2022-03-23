import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { SortingHeaderModule } from './sorting-header.module';
import { TranslateModule } from '@ngx-translate/core';

import { SortingHeaderComponent } from './sorting-header.component';

describe('SortingComponent', () => {
  let component: SortingHeaderComponent;
  let fixture: ComponentFixture<SortingHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SortingHeaderComponent],
      imports: [RouterTestingModule, SortingHeaderModule, TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortingHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
