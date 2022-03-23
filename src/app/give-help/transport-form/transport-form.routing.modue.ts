import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransportFormComponent } from './transport-form.component';

const routes: Routes = [
  {
    path: '',
    component: TransportFormComponent,
    data: { title: null },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransportFormRoutingModule {}
