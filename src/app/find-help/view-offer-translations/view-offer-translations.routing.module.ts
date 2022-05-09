import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewOfferTranslationsComponent } from './view-offer-translations.component';

const routes: Routes = [
  {
    path: '',
    component: ViewOfferTranslationsComponent,
    data: {
      title: null,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewOfferTranslationsRoutingModule {}
