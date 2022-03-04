import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindHelpComponent } from './find-help.component';
import {
  AccommodationSearchComponent,
  AccommodationSearchComponentModule,
} from './accommodation-search/accommodation-search.component';

const routes: Routes = [
  { path: '', redirectTo: 'accommodation' },
  {
    path: 'accommodation',
    component: FindHelpComponent,
    children: [{ path: '', component: AccommodationSearchComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), AccommodationSearchComponentModule],
  exports: [RouterModule],
})
export class FindHelpRoutingModule {}
