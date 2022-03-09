import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GiveHelpComponent } from './give-help.component';
import { CategoryRoutingName } from '@app/shared/models';

const routes: Routes = [
  {
    path: '',
    component: GiveHelpComponent,
    children: [
      {
        path: CategoryRoutingName.ACCOMMODATION,
        loadChildren: () =>
          import('./accommodation-form/accommodation-form.module').then((m) => m.AccommodationFormComponentModule),
      },
      {
        path: CategoryRoutingName.MATERIAL_HELP,
      },
      {
        path: CategoryRoutingName.TRANSPORT,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GiveHelpRoutingModule {}
