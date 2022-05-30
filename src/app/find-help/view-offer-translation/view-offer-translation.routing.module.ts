import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewOfferTranslationComponent } from './view-offer-translation.component';

const routes: Routes = [
  {
    path: '',
    component: ViewOfferTranslationComponent,
    data: {
      title: 'VIEW_TRANSLATION_TITLE',
      breadcrumb: { alias: null },
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewOfferTranslationRoutingModule {}
