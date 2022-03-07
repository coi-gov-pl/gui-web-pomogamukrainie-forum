import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindHelpComponent } from './find-help.component';
import { CategoryRoutingName } from '../core/routing-category-name.enum';

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
        path: CategoryRoutingName.MATERIAL_HELP,
      },
      {
        path: CategoryRoutingName.TRANSPORT,
        loadChildren: () => import('./transport-search/transport-search.module').then((m) => m.TransportSearchModule),
      },
      {
        path: CategoryRoutingName.HEALTH,
      },
      {
        path: CategoryRoutingName.LEGAL_HELP,
      },
      {
        path: CategoryRoutingName.WORK,
      },
      {
        path: CategoryRoutingName.TRANSLATIONS,
      },
      {
        path: CategoryRoutingName.MISC,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FindHelpRoutingModule {}
