import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindHelpComponent } from './find-help.component';
import {
  AccommodationSearchFormComponent,
  AccommodationSearchFormComponentModule,
} from './accommodation-search-form/accommodation-search-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'accommodation' },
  {
    path: 'accommodation',
    component: FindHelpComponent,
    children: [{ path: '', component: AccommodationSearchFormComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), AccommodationSearchFormComponentModule],
  exports: [RouterModule],
})
export class FindHelpRoutingModule {}
