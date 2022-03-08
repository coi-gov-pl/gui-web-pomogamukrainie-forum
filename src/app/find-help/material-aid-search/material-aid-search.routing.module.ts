import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialAidSearchComponent } from './material-aid-search.component';

const routes: Routes = [
  {
    path: '',
    component: MaterialAidSearchComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaterialAidSearchRoutingModule {}
