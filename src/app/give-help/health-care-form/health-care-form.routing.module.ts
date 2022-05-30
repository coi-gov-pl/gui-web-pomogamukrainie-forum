import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HealthCareFormComponent } from './health-care-form.component';
import { CanDeactivateGuard } from '@app/shared/guards/';

const routes: Routes = [
  {
    path: '',
    component: HealthCareFormComponent,
    canDeactivate: [CanDeactivateGuard],
    data: {
      title: 'GIVE_HEALTH_TITLE',
      breadcrumb: { alias: null },
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HealthCareRoutingModule {}
