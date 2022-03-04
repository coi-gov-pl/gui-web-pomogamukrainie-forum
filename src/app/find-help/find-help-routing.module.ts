import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindHelpComponent } from './find-help.component';
import { AccommodationSearchComponent } from './accommodation-search/accommodation-search.component';
import { AccommodationSearchModule } from './accommodation-search/accommodation-search.module';

const routes: Routes = [
  { path: '', redirectTo: 'accommodation' },
  {
    path: 'accommodation',
    component: FindHelpComponent,
    children: [{ path: '', component: AccommodationSearchComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), AccommodationSearchModule],
  exports: [RouterModule],
})
export class FindHelpRoutingModule {}
