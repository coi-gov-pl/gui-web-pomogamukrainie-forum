import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyUrlComponent } from './copy-url.component';

describe('CopyUrlComponent', () => {
  let component: CopyUrlComponent;
  let fixture: ComponentFixture<CopyUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CopyUrlComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CopyUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
