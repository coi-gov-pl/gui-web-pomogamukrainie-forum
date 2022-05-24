import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '@app/shared/components/not-found/not-found.component';
import { CategoryRoutingName } from '@app/shared/models';
import { ViewOfferHealthCareComponent } from './view-offer-health-care.component';

const routes: Routes = [
  {
    path: '',
    component: ViewOfferHealthCareComponent,
    data: { title: null, breadcrumb: { alias: null } },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewOfferHealthRoutingModule {}
