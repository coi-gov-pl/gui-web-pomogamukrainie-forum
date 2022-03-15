import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
