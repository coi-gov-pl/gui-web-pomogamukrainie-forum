import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PluralizePolishPipe } from './pluralize-polish/pluralize-polish.pipe';
import { PathPipe } from './path/path.pipe';

export const PIPES = [PluralizePolishPipe, PathPipe];

@NgModule({
  declarations: PIPES,
  exports: PIPES,
  imports: [CommonModule],
})
export class PomCommonPipesModule {}
