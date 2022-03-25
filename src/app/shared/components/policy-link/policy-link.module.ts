import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { PolicyLinkComponent } from './policy-link.component';

@NgModule({
  declarations: [PolicyLinkComponent],
  imports: [CommonModule, RouterModule, TranslateModule],
  exports: [PolicyLinkComponent],
})
export class PolicyLinkModule {}
