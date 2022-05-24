import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactivateGuard } from '@app/shared/guards';
import { LawFormComponent } from './law-form.component';

const routes: Routes = [
  {
    path: '',
    component: LawFormComponent,
    canDeactivate: [CanDeactivateGuard],
    data: {
      title: null,
      breadcrumb: { alias: null },
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LawFormRoutingModule {}
