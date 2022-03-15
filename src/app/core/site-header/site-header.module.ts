import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SiteHeaderComponent } from './site-header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PomCommonPipesModule } from '@app/shared/pipes';

@NgModule({
  imports: [CommonModule, TranslateModule, MatButtonModule, MatIconModule, PomCommonPipesModule],
  declarations: [SiteHeaderComponent],
  exports: [SiteHeaderComponent],
})
export class SiteHeaderModule {
  constructor(@Optional() @SkipSelf() parentModule: SiteHeaderModule) {
    if (parentModule) {
      throw new Error('SiteHeaderModule is already loaded. Import in your base AppModule only.');
    }
  }
}
