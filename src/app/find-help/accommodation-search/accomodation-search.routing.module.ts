import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccommodationSearchComponent } from './accommodation-search.component';

const routes: Routes = [
  {
    path: '',
    component: AccommodationSearchComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccomodationSearchRoutingModule {}
