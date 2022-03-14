import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewOfferMaterialAidComponent } from './view-offer-material-aid.component';

const routes: Routes = [
  {
    path: '',
    component: ViewOfferMaterialAidComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewOfferMaterialAidModule {}
