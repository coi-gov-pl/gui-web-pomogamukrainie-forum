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
    children: [
      {
        path: CategoryRoutingName.ACCOMMODATION,
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
        path: CategoryRoutingName.TRANSPORT,
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
