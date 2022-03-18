import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorePath } from '@app/shared/models';
import { BreadcrumbLabels } from '@app/shared/models';
import { AuthGuard } from '@app/core/auth';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./welcome/welcome.module').then((m) => m.WelcomeModule),
  },
  {
    path: CorePath.Find,
    loadChildren: () => import('./find-help/find-help.module').then((m) => m.FindHelpModule),
    data: {
      title: BreadcrumbLabels.SEARCH_FOR_HELP,
    },
  },
  {
    path: CorePath.Give,
    canLoad: [AuthGuard],
    loadChildren: () => import('./give-help/give-help.module').then((m) => m.GiveHelpModule),
    data: {
      title: BreadcrumbLabels.ADD_AD,
    },
  },
  {
    path: CorePath.MyAccount,
    canLoad: [AuthGuard],
    loadChildren: () => import('./my-account/my-account.module').then((m) => m.MyAccountModule),
    data: {
      title: BreadcrumbLabels.MY_ACCOUNT,
    },
  },
  {
    path: CorePath.About,
    canLoad: [AuthGuard],
    loadChildren: () => import('./about-app/about-app.module').then((m) => m.AboutAppModule),
    data: {
      title: BreadcrumbLabels.ABOUT,
    },
  },
  {
    path: CorePath.Statement,
    loadChildren: () => import('./statement/statement.module').then((m) => m.StatementModule),
    data: {
      title: BreadcrumbLabels.STATEMENT,
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
