import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialAidFormComponent } from './material-aid-form.component';

describe('MaterialAidFormComponent', () => {
  let component: MaterialAidFormComponent;
  let fixture: ComponentFixture<MaterialAidFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaterialAidFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialAidFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
