import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslationsFormComponent } from './translations-form.component';

const routes: Routes = [
  {
    path: '',
    component: TranslationsFormComponent,
    data: {
      title: null,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TranslationsFormRoutingModule {}
