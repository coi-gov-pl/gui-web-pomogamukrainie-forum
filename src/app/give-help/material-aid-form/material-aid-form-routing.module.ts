import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactivateGuard } from '@app/shared/guards';
import { MaterialAidFormComponent } from './material-aid-form.component';

const routes: Routes = [
  {
    path: '',
    component: MaterialAidFormComponent,
    canDeactivate: [CanDeactivateGuard],
    data: {
      title: null,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaterialAidFormRoutingModule {}
