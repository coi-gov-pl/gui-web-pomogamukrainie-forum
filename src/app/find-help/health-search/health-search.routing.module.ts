import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '@app/shared/components/not-found/not-found.component';
import { CategoryRoutingName } from '@app/shared/models';
import { HealthSearchComponent } from './health-search.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: null,
    },
    children: [
      {
        path: '',
        component: HealthSearchComponent,
        data: {
          title: null,
        },
      },
      {
        path: CategoryRoutingName.NOT_FOUND,
        component: NotFoundComponent,
        loadChildren: () => import('../../shared/components/not-found/not-found.module').then((m) => m.NotFoundModule),
        data: {
          title: null,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HealthSearchRoutingModule {}
