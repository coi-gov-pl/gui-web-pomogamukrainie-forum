import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindHelpComponent } from './find-help.component';
import { CategoryRoutingName } from '@app/shared/models';
import { BreadcrumbLabels } from '@app/shared/models';

const routes: Routes = [
  {
    path: '',
    component: FindHelpComponent,
    children: [
      {
        path: '',
        redirectTo: CategoryRoutingName.ACCOMMODATION,
        pathMatch: 'full',
      },
      {
        path: CategoryRoutingName.ACCOMMODATION,
        loadChildren: () =>
          import('./accommodation-search/accommodation-search.module').then((m) => m.AccommodationSearchModule),
        data: {
          title: 'FIND_HELP_TITLE',
          breadcrumb: { alias: BreadcrumbLabels.ACCOMMODATION },
        },
      },
      {
        path: CategoryRoutingName.MATERIAL_HELP,
        loadChildren: () =>
          import('./material-aid-search/material-aid-search.module').then((m) => m.MaterialAidSearchModule),
        data: {
          title: 'FIND_HELP_TITLE',
          breadcrumb: { alias: BreadcrumbLabels.MATERIAL_HELP },
        },
      },
      {
        path: CategoryRoutingName.TRANSPORT,
        loadChildren: () => import('./transport-search/transport-search.module').then((m) => m.TransportSearchModule),
        data: {
          title: 'FIND_HELP_TITLE',
          breadcrumb: { alias: BreadcrumbLabels.TRANSPORT },
        },
      },
      {
        path: CategoryRoutingName.JOB,
        loadChildren: () => import('./job-search/job-search.module').then((m) => m.JobSearchModule),
        data: {
          title: 'FIND_HELP_TITLE',
          breadcrumb: { alias: BreadcrumbLabels.JOB },
        },
      },
      {
        path: CategoryRoutingName.HEALTH,
        loadChildren: () => import('./health-search/health-search.module').then((m) => m.HealthSearchModule),
        data: {
          title: 'FIND_HELP_TITLE',
          breadcrumb: { alias: BreadcrumbLabels.HEALTH },
        },
      },
      {
        path: CategoryRoutingName.LEGAL_HELP,
        loadChildren: () => import('./law-search/law-search.module').then((m) => m.LawSearchModule),
        data: {
          title: 'FIND_HELP_TITLE',
          breadcrumb: { alias: BreadcrumbLabels.LAW_HELP },
        },
      },
      {
        path: CategoryRoutingName.TRANSLATIONS,
        loadChildren: () =>
          import('./translation-search/translation-search.module').then((m) => m.TranslationSearchModule),
        data: {
          title: 'FIND_HELP_TITLE',
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
