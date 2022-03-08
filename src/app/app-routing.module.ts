import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpTypePath } from './core/help-direction.enum';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./welcome/welcome.module').then((m) => m.WelcomeModule),
  },
  {
    path: HelpTypePath.Find,
    loadChildren: () => import('./find-help/find-help.module').then((m) => m.FindHelpModule),
  },
  {
    path: HelpTypePath.Give,
    loadChildren: () => import('./give-help/give-help.module').then((m) => m.GiveHelpModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
