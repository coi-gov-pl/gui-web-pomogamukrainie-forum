import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Router, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';

import { BreadcrumbComponent } from './breadcrumb.component';

@Component({ template: '' })
class EmptyComponent {}

const CATEGORY_ROUTES: Routes = [
  {
    path: '',
    component: EmptyComponent,
    data: { title: null },
    children: [
      {
        path: 'accommodation',
        data: { title: 'Accommodation' },
        children: [
          {
            path: '',
            data: { title: null },
            children: [
              {
                path: '',
                component: EmptyComponent,
                data: { title: null },
              },
              {
                path: 'not-found',
                component: EmptyComponent,
                data: { title: null },
              },
              {
                path: ':id',
                data: { title: 'Ad' },
                children: [
                  {
                    path: '',
                    component: EmptyComponent,
                    data: { title: null },
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

// simplified version of app routes without lazy loading.
const ROUTES: Routes = [
  {
    path: '',
    component: EmptyComponent,
    pathMatch: 'full',
    data: {
      title: null,
    },
  },
  {
    path: 'find-help',
    data: {
      title: 'Find help',
    },
    children: CATEGORY_ROUTES,
  },
  {
    path: 'give-help',
    data: {
      title: 'Give help',
    },
    children: CATEGORY_ROUTES,
  },
];

describe('BreadcrumbComponent', () => {
  let component: BreadcrumbComponent;
  let fixture: ComponentFixture<BreadcrumbComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BreadcrumbComponent, EmptyComponent],
      imports: [CommonModule, RouterTestingModule.withRoutes(ROUTES), NoopAnimationsModule, TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    router = TestBed.inject(Router);
    fixture = TestBed.createComponent(BreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display single element breadcrumbs initially', async () => {
    expect(component).toBeTruthy();
    expect(component.breadcrumbs).toEqual([{ label: 'MAIN_PAGE', url: '' }]);
  });

  it('should display single element breadcrumbs after navigation to root route', async () => {
    router.navigateByUrl('/');

    fixture.detectChanges();
    await fixture.whenStable();

    expect(component.breadcrumbs).toEqual([{ label: 'MAIN_PAGE', url: '' }]);
  });

  it('should create breadcrumbs for first level route', async () => {
    router.navigateByUrl('/give-help');

    fixture.detectChanges();
    await fixture.whenStable();

    expect(component.breadcrumbs).toEqual([
      { label: 'MAIN_PAGE', url: '' },
      { label: 'Give help', url: '/give-help' },
    ]);
  });

  it('should create breadcrumbs for category level route', async () => {
    router.navigateByUrl('/find-help/accommodation');

    fixture.detectChanges();
    await fixture.whenStable();

    expect(component.breadcrumbs).toEqual([
      { label: 'MAIN_PAGE', url: '' },
      { label: 'Find help', url: '/find-help' },
      { label: 'Accommodation', url: '/find-help/accommodation' },
    ]);
  });

  it('should create breadcrumbs for detailed route', async () => {
    router.navigateByUrl('/find-help/accommodation/27');

    fixture.detectChanges();
    await fixture.whenStable();

    expect(component.breadcrumbs).toEqual([
      { label: 'MAIN_PAGE', url: '' },
      { label: 'Find help', url: '/find-help' },
      { label: 'Accommodation', url: '/find-help/accommodation' },
      { label: 'Ad', url: '/find-help/accommodation/27' },
    ]);
  });

  it('should create breadcrumbs for detailed route containing second route child', async () => {
    router.navigateByUrl('/give-help/accommodation/27');

    fixture.detectChanges();
    await fixture.whenStable();

    expect(component.breadcrumbs).toEqual([
      { label: 'MAIN_PAGE', url: '' },
      { label: 'Give help', url: '/give-help' },
      { label: 'Accommodation', url: '/give-help/accommodation' },
      { label: 'Ad', url: '/give-help/accommodation/27' },
    ]);
  });
});
