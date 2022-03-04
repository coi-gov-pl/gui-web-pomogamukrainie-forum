import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiveHelpComponent } from './give-help.component';
import { GiveHelpRoutingModule } from "./give-help-routing.module";
import { MatCardModule } from "@angular/material/card";

@NgModule({
  declarations: [
    GiveHelpComponent
  ],
  imports: [
    CommonModule,
    GiveHelpRoutingModule,
    MatCardModule,
  ]
})
export class GiveHelpModule { }
