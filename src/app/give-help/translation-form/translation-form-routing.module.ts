import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslationFormComponent } from './translation-form.component';

const routes: Routes = [
  {
    path: '',
    component: TranslationFormComponent,
    data: {
      title: null,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TranslationFormRoutingModule {}
