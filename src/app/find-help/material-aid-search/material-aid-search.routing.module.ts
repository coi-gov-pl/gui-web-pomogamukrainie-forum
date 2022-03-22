import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '@app/shared/components/not-found/not-found.component';
import { CategoryRoutingName } from '@app/shared/models';
import { MaterialAidSearchComponent } from './material-aid-search.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: MaterialAidSearchComponent,
      },
      {
        path: CategoryRoutingName.NOT_FOUND,
        component: NotFoundComponent,
        loadChildren: () => import('../../shared/components/not-found/not-found.module').then((m) => m.NotFoundModule),
      },      
      {
        path: ':id',
        loadChildren: () =>
          import('../view-offer-material-aid/view-offer-material-aid.module').then((m) => m.ViewOfferMaterialAidModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaterialAidSearchRoutingModule {}
