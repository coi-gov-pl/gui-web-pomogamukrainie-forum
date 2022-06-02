import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactivateGuard } from '@app/shared/guards';
import { OtherFormComponent } from './other-form.component';

const routes: Routes = [
  {
    path: '',
    component: OtherFormComponent,
    canDeactivate: [CanDeactivateGuard],
    data: {
      title: 'GIVE_OTHER_TITLE',
      breadcrumb: { alias: null },
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtherFormRoutingModule {}
