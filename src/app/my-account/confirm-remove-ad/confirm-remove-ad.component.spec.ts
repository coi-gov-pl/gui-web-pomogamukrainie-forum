import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateModule } from '@ngx-translate/core';

import { ConfirmRemoveAdComponent } from './confirm-remove-ad.component';

describe('ConfirmRemoveAdComponent', () => {
  let component: ConfirmRemoveAdComponent;
  let fixture: ComponentFixture<ConfirmRemoveAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      declarations: [ConfirmRemoveAdComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmRemoveAdComponent);

    component = fixture.componentInstance;
    component.currentAnnouncement = {
      id: 1,
      userFirstName: '',
      title: 'Test title',
      description: 'Test description',
      location: {
        region: 'foo',
        city: 'bar',
      },
      guests: 1,
      lengthOfStay: 'LONGER',
      hostLanguage: ['PL', 'UA'],
      type: 'ACCOMMODATION',
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
