import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorePath } from '@app/shared/models';
import { MyAccountComponent } from './my-account/my-account/my-account.component';
import { BreadcrumbLabels } from '@app/shared/models';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./welcome/welcome.module').then((m) => m.WelcomeModule),
  },
  {
    path: CorePath.Find,
    loadChildren: () => import('./find-help/find-help.module').then((m) => m.FindHelpModule),
  },
  {
    path: CorePath.Give,
    loadChildren: () => import('./give-help/give-help.module').then((m) => m.GiveHelpModule),
    data: {
      title: BreadcrumbLabels.ADD_AD,
    },
  },
  {
    path: CorePath.MyAccount,
    component: MyAccountComponent,
    loadChildren: () => import('./my-account/my-account.module').then((m) => m.MyAccountModule),
    data: {
      title: BreadcrumbLabels.MY_ACCOUNT,
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
