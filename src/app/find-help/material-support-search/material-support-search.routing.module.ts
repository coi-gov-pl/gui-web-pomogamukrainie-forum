import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialSupportSearchComponent } from './material-support-search.component';

const routes: Routes = [
  {
    path: '',
    component: MaterialSupportSearchComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaterialSupportSearchRoutingModule {}
