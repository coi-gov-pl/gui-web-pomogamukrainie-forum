import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreUrlService } from '@app/core/store-url/store-url.service';
import { CategoryRoutingName, CorePath } from '@app/shared/models';
import { TranslateModule } from '@ngx-translate/core';

import { BackToListComponent } from './back-to-list.component';
import { BackToListModule } from './back-to-list.module';

@Component({ template: '' })
class EmptyComponent {}

describe('BackToListComponent', () => {
  let component: BackToListComponent;
  let fixture: ComponentFixture<BackToListComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BackToListComponent],
      imports: [
        BackToListModule,
        TranslateModule.forRoot(),
        NoopAnimationsModule,
        RouterTestingModule.withRoutes([{ path: '**', component: EmptyComponent }]),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    router = TestBed.inject(Router);
    fixture = TestBed.createComponent(BackToListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  async function navigate(route: string[]) {
    await router.navigate(route);
    fixture.detectChanges();
    component.ngOnChanges();
    await fixture.whenStable();
  }

  describe('inside my-account route', () => {
    it('should build link to my-account', async () => {
      await navigate(['foo', CorePath.MyAccount, 'bar']);

      expect(component.backRoute).toEqual(['/', CorePath.MyAccount]);
      expect(component.queryParams).toBeFalsy();
    });
  });

  describe('outside my-account route', () => {
    it('should build link without the last path segment in original route', async () => {
      await navigate(['foo', 'bar', '1']);

      expect(component.backRoute).toEqual(['/foo/bar']);
    });

    it('should display query params based on input category', async () => {
      const paramsSpy = spyOn(TestBed.inject(StoreUrlService), 'getParams').and.returnValue({ page: 2 });

      component.categoryRouteName = CategoryRoutingName.TRANSPORT;
      await navigate(['foo', 'bar', '1']);

      expect(paramsSpy).toHaveBeenCalledWith(CategoryRoutingName.TRANSPORT);
      expect(component.queryParams).toEqual({ page: 2 });
    });
  });
});
