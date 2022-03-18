import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@app/core/auth';
import { AboutAppComponent } from './about-app/about-app.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: AboutAppComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutAppRoutingModule {}
