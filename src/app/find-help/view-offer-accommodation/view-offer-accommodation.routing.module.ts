import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewOfferAccommodationComponent } from './view-offer-accommodation.component';

const routes: Routes = [
  {
    path: '',
    component: ViewOfferAccommodationComponent,
    data: { title: null, breadcrumb: { alias: null } },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewOfferAccomodationModule {}
