import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreadcrumbLabels } from '@app/shared/models';
import { AboutAppComponent } from './about-app/about-app.component';

const routes: Routes = [
  {
    path: '',
    component: AboutAppComponent,
    data: {
      title: null,
      breadcrumb: { alias: BreadcrumbLabels.ABOUT },
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutAppRoutingModule {}
