import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LegalHelpFormComponent } from './legal-help-form.component';

const routes: Routes = [
  {
    path: '',
    component: LegalHelpFormComponent,
    data: {
      title: null,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LegalHelpFormRoutingModule {}
