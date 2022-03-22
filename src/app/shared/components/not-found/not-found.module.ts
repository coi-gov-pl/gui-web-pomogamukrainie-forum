import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { PomCommonPipesModule } from '@app/shared/pipes';
import { NotFoundComponent } from './not-found.component';

@NgModule({
  imports: [CommonModule, TranslateModule, MatButtonModule, MatIconModule, RouterModule, PomCommonPipesModule],
  declarations: [NotFoundComponent],
  exports: [NotFoundComponent],
})
export class NotFoundModule {}
