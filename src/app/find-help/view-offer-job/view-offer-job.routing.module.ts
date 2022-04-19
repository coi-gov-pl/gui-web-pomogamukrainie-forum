import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewOfferJobComponent } from './view-offer-job.component';

const routes: Routes = [
  {
    path: '',
    component: ViewOfferJobComponent,
    data: { title: null },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewOfferJobRoutingModule {}
