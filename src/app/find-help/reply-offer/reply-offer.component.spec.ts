import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplyOfferComponent } from './reply-offer.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ReplyOfferComponent', () => {
  let component: ReplyOfferComponent;
  let fixture: ComponentFixture<ReplyOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReplyOfferComponent],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplyOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
