import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccommodationSearchComponent } from './accommodation-search.component';
import { AccommodationOfferComponent } from '../accommodation-offer/accommodation-offer.component';

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
        component: AccommodationOfferComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccomodationSearchRoutingModule {}
