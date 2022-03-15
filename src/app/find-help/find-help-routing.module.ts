import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindHelpComponent } from './find-help.component';
import { CategoryRoutingName } from '@app/shared/models';
import { SearchResultComponentModule } from './search-result/search-result.module';
import { ViewOfferAccomodationModule } from './view-offer-accommodation/view-offer-accommodation.routing.module';
import { ViewOfferMaterialAidModule } from './view-offer-material-aid/view-offer-material-aid.routing.module';
import { ViewOfferTransportModule } from './view-offer-transport/view-offer-transport.module';

const routes: Routes = [
  {
    path: '',
    component: FindHelpComponent,
    children: [
      {
        path: CategoryRoutingName.ACCOMMODATION,
        loadChildren: () =>
          import('./accommodation-search/accommodation-search.module').then((m) => m.AccommodationSearchModule),
      },
      {
        path: CategoryRoutingName.MATERIAL_HELP,
        loadChildren: () =>
          import('./material-aid-search/material-aid-search.module').then((m) => m.MaterialAidSearchModule),
      },
      {
        path: CategoryRoutingName.TRANSPORT,
        loadChildren: () => import('./transport-search/transport-search.module').then((m) => m.TransportSearchModule),
      },
      {
        path: CategoryRoutingName.VIEW_OFFER_ACCOMMODATION,
        loadChildren: () =>
          import('./view-offer-accommodation/view-offer-accommodation.module').then(
            (m) => m.ViewOfferAccommodationModule
          ),
      },
      {
        path: CategoryRoutingName.VIEW_OFFER_MATERIALAID,
        loadChildren: () =>
          import('./view-offer-material-aid/view-offer-material-aid.module').then((m) => m.ViewOfferMaterialAidModule),
      },
      {
        path: CategoryRoutingName.VIEW_OFFER_TRANSPORT,
        loadChildren: () =>
          import('./view-offer-transport/view-offer-transport.module').then((m) => m.ViewOfferTransportModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FindHelpRoutingModule {}
