import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LawFormComponent } from './law-form.component';

const routes: Routes = [
  {
    path: '',
    component: LawFormComponent,
    data: {
      title: null,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LawFormRoutingModule {}
