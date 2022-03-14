import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewOfferComponent } from './view-offer.component';

const routes: Routes = [
  {
    path: '',
    component: ViewOfferComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReplyOfferRoutingModule {}
