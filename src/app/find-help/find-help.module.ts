import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FindHelpComponent } from './find-help.component';
import { FindHelpRoutingModule } from './find-help-routing.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [FindHelpComponent],
  imports: [CommonModule, FindHelpRoutingModule, TranslateModule],
})
export class FindHelpModule {}
