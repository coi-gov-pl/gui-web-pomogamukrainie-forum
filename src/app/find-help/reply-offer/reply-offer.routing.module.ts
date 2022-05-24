import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReplyOfferComponent } from './reply-offer.component';

const routes: Routes = [
  {
    path: '',
    component: ReplyOfferComponent,
    data: { title: null, breadcrumb: { alias: null } },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReplyOffeRoutingModule {}
