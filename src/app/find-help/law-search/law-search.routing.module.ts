import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '@app/shared/components/not-found/not-found.component';
import { BreadcrumbLabels, CategoryRoutingName } from '@app/shared/models';
import { LawSearchComponent } from './law-search.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: null,
    },
    children: [
      {
        path: '',
        component: LawSearchComponent,
        data: {
          title: null,
        },
      },
      {
        path: CategoryRoutingName.NOT_FOUND,
        component: NotFoundComponent,
        loadChildren: () => import('../../shared/components/not-found/not-found.module').then((m) => m.NotFoundModule),
        data: {
          title: null,
        },
      },
      // TODO: view law in separate PR
      // {
      //   path: ':id',
      //   loadChildren: () =>
      //     import('../view-offer-law/view-offer-law.module').then(
      //       (m) => m.ViewOfferLawModule
      //     ),
      //   data: {
      //     title: BreadcrumbLabels.AD,
      //   },
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LawSearchRoutingModule {}
