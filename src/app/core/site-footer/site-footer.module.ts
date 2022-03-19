import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteFooterComponent } from './site-footer/site-footer.component';
import { PomCommonPipesModule } from '@app/shared/pipes';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [SiteFooterComponent],
  exports: [SiteFooterComponent],
  imports: [CommonModule, PomCommonPipesModule, RouterModule, TranslateModule],
})
export class SiteFooterModule {}
