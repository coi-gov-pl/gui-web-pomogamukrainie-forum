import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { BackToListComponent } from './back-to-list.component';

@NgModule({
  declarations: [BackToListComponent],
  imports: [CommonModule, RouterModule, TranslateModule],
  exports: [BackToListComponent],
})
export class BackToListModule {}
