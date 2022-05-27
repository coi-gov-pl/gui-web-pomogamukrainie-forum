import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '@app/shared/components/not-found/not-found.component';
import { BreadcrumbLabels, CategoryRoutingName } from '@app/shared/models';
import { TransportSearchComponent } from './transport-search.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: TransportSearchComponent,
        data: { breadcrumb: { alias: null } },
      },
    ],
    data: { breadcrumb: { alias: null } },
  },
  {
    path: CategoryRoutingName.NOT_FOUND,
    component: NotFoundComponent,
    loadChildren: () => import('../../shared/components/not-found/not-found.module').then((m) => m.NotFoundModule),
    data: { title: 'PAGE_NOT_FOUND', breadcrumb: { alias: null } },
  },
  {
    path: ':id',
    loadChildren: () =>
      import('../view-offer-transport/view-offer-transport.module').then((m) => m.ViewOfferTransportModule),
    data: { breadcrumb: { alias: BreadcrumbLabels.AD } },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransportSearchRoutingModule {}
