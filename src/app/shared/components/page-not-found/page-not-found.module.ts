import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { PomCommonPipesModule } from '@app/shared/pipes';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
  imports: [RouterModule, TranslateModule, PomCommonPipesModule],
  declarations: [PageNotFoundComponent],
  exports: [PageNotFoundComponent],
})
export class PageNotFoundModule {}
