import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { PomCommonPipesModule } from './pipes/pom-common-pipes.module';
import { BreadcrumbComponent } from './components/breadcrumbs/breadcrumb/breadcrumb.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { ValidatorsDirectivesModule } from './validators';
import { ConfirmCancelDialogComponent } from './components/confirm-cancel-dialog/cancel-dialog.component';

@NgModule({
  declarations: [BreadcrumbComponent, ConfirmCancelDialogComponent],
  imports: [CommonModule, RouterModule, MatIconModule, TranslateModule],
  exports: [MatCardModule, PomCommonPipesModule, BreadcrumbComponent, ValidatorsDirectivesModule],
})
export class SharedModule {}
