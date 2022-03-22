import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DigitOnlyDirective } from './digit-only.directive';

const directives = [DigitOnlyDirective];

@NgModule({
  declarations: [...directives],
  exports: [...directives],
  imports: [CommonModule],
})
export class DirectivesModule {}
