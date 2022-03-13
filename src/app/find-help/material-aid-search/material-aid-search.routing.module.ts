import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialAidSearchComponent } from './material-aid-search.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: MaterialAidSearchComponent,
      },
      {
        path: ':id',
        // place for your component
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaterialAidSearchRoutingModule {}
