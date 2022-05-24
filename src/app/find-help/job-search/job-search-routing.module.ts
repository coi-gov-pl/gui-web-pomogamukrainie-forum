import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreadcrumbLabels, CategoryRoutingName } from '@app/shared/models';
import { NotFoundComponent } from '@app/shared/components/not-found/not-found.component';
import { JobSearchComponent } from './job-search.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: null,
      breadcrumb: { alias: null },
    },
    children: [
      {
        path: '',
        component: JobSearchComponent,
        data: {
          title: null,
          breadcrumb: { alias: null },
        },
      },
      {
        path: CategoryRoutingName.NOT_FOUND,
        component: NotFoundComponent,
        loadChildren: () => import('../../shared/components/not-found/not-found.module').then((m) => m.NotFoundModule),
        data: {
          title: null,
          breadcrumb: { alias: null },
        },
      },
      {
        path: ':id',
        loadChildren: () => import('../view-offer-job/view-offer-job.module').then((m) => m.ViewOfferJobModule),
        data: {
          title: BreadcrumbLabels.AD,
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
export class JobSearchRoutingModule {}
