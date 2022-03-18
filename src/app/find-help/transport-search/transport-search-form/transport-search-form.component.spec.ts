import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { TransportSearchFormComponent } from './transport-search-form.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('TransportSearchFormComponent', () => {
  let component: TransportSearchFormComponent;
  let fixture: ComponentFixture<TransportSearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransportSearchFormComponent],
      imports: [TranslateModule.forRoot(), FormsModule, RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
