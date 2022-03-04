import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FindHelpComponent } from './find-help.component';
import { FindHelpRoutingModule } from "./find-help-routing.module";

@NgModule({
  declarations: [
    FindHelpComponent
  ],
  imports: [
    CommonModule,
    FindHelpRoutingModule,
  ]
})
export class FindHelpModule { }
