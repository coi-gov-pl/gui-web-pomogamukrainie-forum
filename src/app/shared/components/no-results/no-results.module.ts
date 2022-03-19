import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoResultsComponent } from './no-results.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [NoResultsComponent],
  imports: [CommonModule, RouterModule, TranslateModule],
  exports: [NoResultsComponent],
})
export class NoResultsModule {}
