import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkFormComponent } from './work-form.component';

const routes: Routes = [
  {
    path: '',
    component: WorkFormComponent,
    data: { title: null },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkFormRoutingModule {}
