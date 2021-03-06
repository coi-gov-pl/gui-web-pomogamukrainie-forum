import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOfferMaterialAidComponent } from './view-offer-material-aid.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ViewOfferMaterialAidComponent', () => {
  let component: ViewOfferMaterialAidComponent;
  let fixture: ComponentFixture<ViewOfferMaterialAidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewOfferMaterialAidComponent],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOfferMaterialAidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
