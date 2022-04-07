import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GiveHelpComponent } from './give-help.component';
import { CategoryRoutingName } from '@app/shared/models';
import { BreadcrumbLabels } from '@app/shared/models';
import { AuthGuard } from '@app/core/auth';

const routes: Routes = [
  {
    path: '',
    component: GiveHelpComponent,
    canActivate: [AuthGuard],
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
          import('./accommodation-form/accommodation-form.module').then((m) => m.AccommodationFormComponentModule),
        data: {
          title: BreadcrumbLabels.ACCOMMODATION,
        },
      },
      {
        path: `${CategoryRoutingName.ACCOMMODATION}/:id`,
        loadChildren: () =>
          import('./accommodation-form/accommodation-form.module').then((m) => m.AccommodationFormComponentModule),
        data: {
          title: BreadcrumbLabels.ACCOMMODATION,
        },
      },
      {
        path: CategoryRoutingName.MATERIAL_HELP,
        loadChildren: () => import('./material-aid-form/material-aid-form.module').then((m) => m.MaterialAidFormModule),
        data: {
          title: BreadcrumbLabels.MATERIAL_HELP,
        },
      },
      {
        path: `${CategoryRoutingName.MATERIAL_HELP}/:id`,
        loadChildren: () => import('./material-aid-form/material-aid-form.module').then((m) => m.MaterialAidFormModule),
        data: {
          title: BreadcrumbLabels.MATERIAL_HELP,
        },
      },
      {
        path: CategoryRoutingName.TRANSPORT,
        loadChildren: () =>
          import('./transport-form/transport-form.module').then((m) => m.TransportFormComponentModule),
        data: {
          title: BreadcrumbLabels.TRANSPORT,
        },
      },
      {
        path: `${CategoryRoutingName.TRANSPORT}/:id`,
        loadChildren: () =>
          import('./transport-form/transport-form.module').then((m) => m.TransportFormComponentModule),
        data: {
          title: BreadcrumbLabels.TRANSPORT,
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
