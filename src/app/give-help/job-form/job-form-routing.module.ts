import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobFormComponent } from './job-form.component';

const routes: Routes = [
  {
    path: '',
    component: JobFormComponent,
    data: { title: null },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobFormRoutingModule {}
