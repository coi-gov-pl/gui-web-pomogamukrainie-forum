import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransportSearchComponent } from './transport-search.component';

const routes: Routes = [
  {
    path: '',
    component: TransportSearchComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransportSearchRoutingModule {}
