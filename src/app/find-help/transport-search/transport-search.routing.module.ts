import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '@app/core/not-found/not-found.component';
import { CategoryRoutingName } from '@app/shared/models';
import { TransportSearchComponent } from './transport-search.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: TransportSearchComponent,
      },
    ],
  },
  {         
    path: CategoryRoutingName.NOT_FOUND,
    component: NotFoundComponent
  },  
  {
    path: ':id',
    loadChildren: () =>
      import('../view-offer-transport/view-offer-transport.module').then((m) => m.ViewOfferTransportModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransportSearchRoutingModule {}
