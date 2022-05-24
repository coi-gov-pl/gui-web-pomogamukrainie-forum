import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewOfferTranslationComponent } from './view-offer-translation.component';

const routes: Routes = [
  {
    path: '',
    component: ViewOfferTranslationComponent,
    data: {
      title: null,
      breadcrumb: { alias: null },
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewOfferTranslationRoutingModule {}
