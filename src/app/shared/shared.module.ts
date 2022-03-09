import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { PomCommonPipesModule } from './pipes/pom-common-pipes.module';

@NgModule({
  imports: [CommonModule],
  exports: [MatCardModule, PomCommonPipesModule],
})
export class SharedModule {}
