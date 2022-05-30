import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactivateGuard } from '@app/shared/guards';
import { TranslationFormComponent } from './translation-form.component';

const routes: Routes = [
  {
    path: '',
    component: TranslationFormComponent,
    canDeactivate: [CanDeactivateGuard],
    data: {
      title: 'GIVE_TRANSLATION_TITLE',
      breadcrumb: { alias: null },
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TranslationFormRoutingModule {}
