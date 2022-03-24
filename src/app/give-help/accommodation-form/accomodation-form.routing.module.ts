import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccommodationFormComponent } from './accommodation-form.component';

const routes: Routes = [
  {
    path: '',
    component: AccommodationFormComponent,
    data: {
      title: null,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccommodationSearchRoutingModule {}
