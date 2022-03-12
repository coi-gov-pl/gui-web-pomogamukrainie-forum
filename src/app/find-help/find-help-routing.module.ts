import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindHelpComponent } from './find-help.component';
import { CategoryRoutingName } from '@app/shared/models';

const routes: Routes = [
  {
    path: '',
    component: FindHelpComponent,
    children: [
      {
        path: CategoryRoutingName.ACCOMMODATION,
        loadChildren: () =>
          import('./accommodation-search/accommodation-search.module').then((m) => m.AccommodationSearchModule),
      },
      {
        path: CategoryRoutingName.ACCOMMODATION + '/:id',
        loadChildren: () =>
          import('./accommodation-offer/accommodation-offer.module').then((m) => m.AccommodationOfferModule),
      },
      {
        path: CategoryRoutingName.MATERIAL_HELP,
        loadChildren: () =>
          import('./material-aid-search/material-aid-search.module').then((m) => m.MaterialAidSearchModule),
      },
      {
        path: CategoryRoutingName.TRANSPORT,
        loadChildren: () => import('./transport-search/transport-search.module').then((m) => m.TransportSearchModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FindHelpRoutingModule {}
