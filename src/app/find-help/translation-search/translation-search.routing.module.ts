import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '@app/shared/components/not-found/not-found.component';
import { BreadcrumbLabels, CategoryRoutingName } from '@app/shared/models';
import { TranslationSearchComponent } from './translation-search.component';

const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: { alias: null },
    },
    children: [
      {
        path: '',
        component: TranslationSearchComponent,
        data: {
          breadcrumb: { alias: null },
        },
      },
      {
        path: CategoryRoutingName.NOT_FOUND,
        component: NotFoundComponent,
        loadChildren: () => import('../../shared/components/not-found/not-found.module').then((m) => m.NotFoundModule),
        data: {
          title: 'PAGE_NOT_FOUND',
          breadcrumb: { alias: null },
        },
      },
      {
        path: ':id',
        loadChildren: () =>
          import('../view-offer-translation/view-offer-translation.module').then((m) => m.ViewOfferTranslationModule),
        data: {
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
export class TranslationSearchRoutingModule {}
