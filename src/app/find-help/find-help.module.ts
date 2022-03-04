import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FindHelpComponent} from './find-help.component';
import {FindHelpRoutingModule} from "./find-help-routing.module";
import {MatCardModule} from "@angular/material/card";
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    FindHelpComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    TranslateModule,
    FindHelpRoutingModule,
  ]
})
export class FindHelpModule { }
