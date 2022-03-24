import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublishAdButtonComponent } from './publish-ad-button/publish-ad-button.component';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [PublishAdButtonComponent],
  exports: [PublishAdButtonComponent],
  imports: [CommonModule, FormsModule, MatIconModule, TranslateModule],
})
export class GiveHelpFormModule {}
