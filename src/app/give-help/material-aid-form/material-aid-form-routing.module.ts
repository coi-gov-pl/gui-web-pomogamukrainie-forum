import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialAidFormComponent } from './material-aid-form.component';

const routes: Routes = [
  {
    path: '',
    component: MaterialAidFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaterialAidFormRoutingModule {}
