import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FindHelpComponent } from './find-help.component';
import { FindHelpRoutingModule } from './find-help-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialSupportFormModule } from './material-support-form/material-support-form.component';

@NgModule({
  declarations: [FindHelpComponent],
  imports: [CommonModule, FindHelpRoutingModule, TranslateModule, MaterialSupportFormModule],
})
export class FindHelpModule {}
