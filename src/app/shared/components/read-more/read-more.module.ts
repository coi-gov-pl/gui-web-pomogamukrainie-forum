import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadMoreComponent } from './read-more.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [ReadMoreComponent],
  exports: [ReadMoreComponent],
  imports: [CommonModule, TranslateModule],
})
export class ReadMoreModule {}
