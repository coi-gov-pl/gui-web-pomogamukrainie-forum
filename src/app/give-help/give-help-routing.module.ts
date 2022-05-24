import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@app/core/auth';
import { BreadcrumbLabels, CategoryRoutingName } from '@app/shared/models';
import { GiveHelpComponent } from './give-help.component';

const routes: Routes = [
  {
    path: '',
    component: GiveHelpComponent,
    canActivate: [AuthGuard],
    data: {
      breadcrumb: { alias: BreadcrumbLabels.ADD_AD },
    },
    children: [
      {
        path: '',
        redirectTo: CategoryRoutingName.ACCOMMODATION,
        pathMatch: 'full',
        data: {
          breadcrumb: { alias: null },
        },
      },
      {
        path: CategoryRoutingName.ACCOMMODATION,
        loadChildren: () =>
          import('./accommodation-form/accommodation-form.module').then((m) => m.AccommodationFormComponentModule),
        data: {
          breadcrumb: { alias: BreadcrumbLabels.ACCOMMODATION },
        },
      },
      {
        path: `${CategoryRoutingName.ACCOMMODATION}/:id`,
        loadChildren: () =>
          import('./accommodation-form/accommodation-form.module').then((m) => m.AccommodationFormComponentModule),
        data: {
          breadcrumb: { alias: BreadcrumbLabels.ACCOMMODATION },
        },
      },
      {
        path: CategoryRoutingName.MATERIAL_HELP,
        loadChildren: () => import('./material-aid-form/material-aid-form.module').then((m) => m.MaterialAidFormModule),
        data: {
          breadcrumb: { alias: BreadcrumbLabels.MATERIAL_HELP },
        },
      },
      {
        path: `${CategoryRoutingName.MATERIAL_HELP}/:id`,
        loadChildren: () => import('./material-aid-form/material-aid-form.module').then((m) => m.MaterialAidFormModule),
        data: {
          breadcrumb: { alias: BreadcrumbLabels.MATERIAL_HELP },
        },
      },
      {
        path: CategoryRoutingName.TRANSPORT,
        loadChildren: () =>
          import('./transport-form/transport-form.module').then((m) => m.TransportFormComponentModule),
        data: {
          breadcrumb: { alias: BreadcrumbLabels.TRANSPORT },
        },
      },
      {
        path: `${CategoryRoutingName.TRANSPORT}/:id`,
        loadChildren: () =>
          import('./transport-form/transport-form.module').then((m) => m.TransportFormComponentModule),
        data: {
          breadcrumb: { alias: BreadcrumbLabels.TRANSPORT },
        },
      },
      {
        path: CategoryRoutingName.HEALTH,
        loadChildren: () => import('./health-care-form/health-care-form.module').then((m) => m.HealthCareFormModule),
        data: {
          breadcrumb: { alias: BreadcrumbLabels.HEALTH },
        },
      },
      {
        path: `${CategoryRoutingName.HEALTH}/:id`,
        loadChildren: () => import('./health-care-form/health-care-form.module').then((m) => m.HealthCareFormModule),
        data: {
          breadcrumb: { alias: BreadcrumbLabels.HEALTH },
        },
      },
      {
        path: CategoryRoutingName.JOB,
        loadChildren: () => import('./job-form/job-form.module').then((m) => m.JobFormModule),
        data: {
          breadcrumb: { alias: BreadcrumbLabels.JOB },
        },
      },
      {
        path: `${CategoryRoutingName.JOB}/:id`,
        loadChildren: () => import('./job-form/job-form.module').then((m) => m.JobFormModule),
        data: {
          breadcrumb: { alias: BreadcrumbLabels.JOB },
        },
      },
      {
        path: CategoryRoutingName.LEGAL_HELP,
        loadChildren: () => import('./law-form/law-form.module').then((m) => m.LawFormModule),
        data: {
          breadcrumb: { alias: BreadcrumbLabels.LEGAL_HELP },
        },
      },
      {
        path: `${CategoryRoutingName.LEGAL_HELP}/:id`,
        loadChildren: () => import('./law-form/law-form.module').then((m) => m.LawFormModule),
        data: {
          breadcrumb: { alias: BreadcrumbLabels.LEGAL_HELP },
        },
      },

      {
        path: CategoryRoutingName.TRANSLATIONS,
        loadChildren: () => import('./translation-form/translation-form.module').then((m) => m.TranslationFormModule),
        data: {
          breadcrumb: { alias: BreadcrumbLabels.TRANSLATIONS },
        },
      },
      {
        path: `${CategoryRoutingName.TRANSLATIONS}/:id`,
        loadChildren: () => import('./translation-form/translation-form.module').then((m) => m.TranslationFormModule),
        data: {
          breadcrumb: { alias: BreadcrumbLabels.TRANSLATIONS },
        },
      },
      {
        path: CategoryRoutingName.OTHER,
        loadChildren: () => import('./other-form/other-form.module').then((m) => m.OtherFormModule),
        data: {
          breadcrumb: { alias: BreadcrumbLabels.OTHER },
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GiveHelpRoutingModule {}
