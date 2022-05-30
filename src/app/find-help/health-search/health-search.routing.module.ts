import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '@app/shared/components/not-found/not-found.component';
import { BreadcrumbLabels, CategoryRoutingName } from '@app/shared/models';
import { HealthSearchComponent } from './health-search.component';

const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: { alias: null },
    },
    children: [
      {
        path: '',
        component: HealthSearchComponent,
        data: {
          breadcrumb: { alias: null },
        },
      },
      {
        path: CategoryRoutingName.NOT_FOUND,
        component: NotFoundComponent,
        loadChildren: () => import('../../shared/components/not-found/not-found.module').then((m) => m.NotFoundModule),
        data: {
          title: 'PAGE_NOT_FOUND',
          breadcrumb: { alias: null },
        },
      },
      {
        path: ':id',
        loadChildren: () =>
          import('../view-offer-health-care/view-offer-health-care.module').then((m) => m.ViewOfferHealthCareModule),
        data: {
          breadcrumb: { alias: BreadcrumbLabels.AD },
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HealthSearchRoutingModule {}
