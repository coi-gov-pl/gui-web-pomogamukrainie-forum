import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReplyOfferComponent } from './reply-offer.component';

const routes: Routes = [
  {
    path: '',
    component: ReplyOfferComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReplyOffeRoutingModule {}
