import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewOfferLawComponent } from './view-offer-law.component';

const routes: Routes = [
  {
    path: '',
    component: ViewOfferLawComponent,
    data: { title: 'VIEW_LAW_TITLE', breadcrumb: { alias: null } },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewOfferLawRoutingModule {}
