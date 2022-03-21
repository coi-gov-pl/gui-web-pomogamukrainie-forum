import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortingHeaderComponent } from './sorting-header.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [SortingHeaderComponent],
  imports: [CommonModule, TranslateModule],
  exports: [SortingHeaderComponent],
})
export class SortingHeaderModule {}
