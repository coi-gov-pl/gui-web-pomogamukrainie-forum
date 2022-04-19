import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HealthCareFormComponent } from './health-care-form.component';

const routes: Routes = [
  {
    path: '',
    component: HealthCareFormComponent,
    data: {
      title: null,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HealthCareRoutingModule {}
