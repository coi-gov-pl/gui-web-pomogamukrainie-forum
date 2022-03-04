import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiveHelpComponent } from './give-help.component';
import { GiveHelpRoutingModule } from './give-help-routing.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [GiveHelpComponent],
  imports: [CommonModule, GiveHelpRoutingModule, TranslateModule],
})
export class GiveHelpModule {}
