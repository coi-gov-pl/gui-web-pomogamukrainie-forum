import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactivateGuard } from '@app/shared/guards';
import { TransportFormComponent } from './transport-form.component';

const routes: Routes = [
  {
    path: '',
    component: TransportFormComponent,
    canDeactivate: [CanDeactivateGuard],
    data: { title: null },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransportFormRoutingModule {}
