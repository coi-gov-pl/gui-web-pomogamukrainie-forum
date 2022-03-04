import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GiveHelpComponent } from "./give-help.component";

const routes: Routes = [
  {
    path: '',
    component: GiveHelpComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GiveHelpRoutingModule { }
