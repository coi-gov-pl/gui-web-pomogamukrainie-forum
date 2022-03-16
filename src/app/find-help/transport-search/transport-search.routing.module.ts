import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
