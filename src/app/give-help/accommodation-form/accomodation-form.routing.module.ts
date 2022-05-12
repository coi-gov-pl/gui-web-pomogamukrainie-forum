import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccommodationFormComponent } from './accommodation-form.component';
import { CanDeactivateGuard } from '../can-deactivate.guard';

const routes: Routes = [
  {
    path: '',
    component: AccommodationFormComponent,
    canDeactivate: [CanDeactivateGuard],
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
