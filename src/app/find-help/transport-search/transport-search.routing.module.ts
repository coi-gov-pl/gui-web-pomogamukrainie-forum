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
      {
        path: ':id',
        // place for your component
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransportSearchRoutingModule {}
