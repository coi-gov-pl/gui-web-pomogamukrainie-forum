import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialSupportFormComponent } from './material-support-form.component';

const routes: Routes = [
  {
    path: '',
    component: MaterialSupportFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaterialSupportFormRoutingModule {}
