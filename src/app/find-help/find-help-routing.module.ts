import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindHelpComponent } from './find-help.component';
import { CategoryRoutingName } from '@app/shared/models';
import { BreadcrumbLabels } from '@app/shared/models';

const routes: Routes = [
  {
    path: '',
    component: FindHelpComponent,
    data: {
      title: null,
    },
    children: [
      {
        path: '',
        redirectTo: CategoryRoutingName.ACCOMMODATION,
        pathMatch: 'full',
        data: {
          title: null,
        },
      },
      {
        path: CategoryRoutingName.ACCOMMODATION,
        loadChildren: () =>
          import('./accommodation-search/accommodation-search.module').then((m) => m.AccommodationSearchModule),
        data: {
          title: BreadcrumbLabels.ACCOMMODATION,
          breadcrumb: { alias: BreadcrumbLabels.ACCOMMODATION },
        },
      },
      {
        path: CategoryRoutingName.MATERIAL_HELP,
        loadChildren: () =>
          import('./material-aid-search/material-aid-search.module').then((m) => m.MaterialAidSearchModule),
        data: {
          title: BreadcrumbLabels.MATERIAL_HELP,
          breadcrumb: { alias: BreadcrumbLabels.MATERIAL_HELP },
        },
      },
      {
        path: CategoryRoutingName.TRANSPORT,
        loadChildren: () => import('./transport-search/transport-search.module').then((m) => m.TransportSearchModule),
        data: {
          title: BreadcrumbLabels.TRANSPORT,
          breadcrumb: { alias: BreadcrumbLabels.TRANSPORT },
        },
      },
      {
        path: CategoryRoutingName.JOB,
        loadChildren: () => import('./job-search/job-search.module').then((m) => m.JobSearchModule),
        data: {
          title: BreadcrumbLabels.JOB,
          breadcrumb: { alias: BreadcrumbLabels.JOB },
        },
      },
      {
        path: CategoryRoutingName.HEALTH,
        loadChildren: () => import('./health-search/health-search.module').then((m) => m.HealthSearchModule),
        data: {
          title: BreadcrumbLabels.HEALTH,
          breadcrumb: { alias: BreadcrumbLabels.HEALTH },
        },
      },
      {
        path: CategoryRoutingName.LEGAL_HELP,
        loadChildren: () => import('./law-search/law-search.module').then((m) => m.LawSearchModule),
        data: {
          title: BreadcrumbLabels.LAW_HELP,
          breadcrumb: { alias: BreadcrumbLabels.LAW_HELP },
        },
      },
      {
        path: CategoryRoutingName.TRANSLATIONS,
        loadChildren: () =>
          import('./translation-search/translation-search.module').then((m) => m.TranslationSearchModule),
        data: {
          title: BreadcrumbLabels.TRANSLATIONS,
          breadcrumb: { alias: BreadcrumbLabels.TRANSLATIONS },
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FindHelpRoutingModule {}
