import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewOfferTransportComponent } from './view-offer-transport.component';

const routes: Routes = [
  {
    path: '',
    component: ViewOfferTransportComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewOfferTransportRoutingModule {}
