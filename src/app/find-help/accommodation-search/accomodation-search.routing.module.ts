import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccommodationSearchComponent } from './accommodation-search.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: AccommodationSearchComponent,
      },
      {
        path: ':id',
        loadChildren: () =>
          import('../view-offer-accommodation/view-offer-accommodation.module').then(
            (m) => m.ViewOfferAccommodationModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccomodationSearchRoutingModule {}
