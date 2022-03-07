import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PluralizePolishPipe } from './pluralize-polish/pluralize-polish.pipe';

@NgModule({
  declarations: [PluralizePolishPipe],
  exports: [PluralizePolishPipe],
  imports: [CommonModule],
})
export class PomCommonPipesModule {}
