import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PathPipe } from './path/path.pipe';

@NgModule({
  declarations: [PathPipe],
  exports: [PathPipe],
  imports: [CommonModule],
})
export class PomCommonPipesModule {}
