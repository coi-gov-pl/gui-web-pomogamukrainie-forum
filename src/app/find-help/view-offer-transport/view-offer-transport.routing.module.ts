import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '@app/shared/components/not-found/not-found.component';
import { CategoryRoutingName } from '@app/shared/models';
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
