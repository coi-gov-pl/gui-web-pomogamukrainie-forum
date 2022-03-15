import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PluralizePolishPipe } from './pluralize-polish/pluralize-polish.pipe';
import { PathPipe } from './path/path.pipe';

@NgModule({
  declarations: [PluralizePolishPipe, PathPipe],
  exports: [PluralizePolishPipe, PathPipe],
  imports: [CommonModule],
})
export class PomCommonPipesModule {}
