import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { PomCommonPipesModule } from './pipes/pom-common-pipes.module';
import { BreadcrumbComponent } from './components/breadcrumbs/breadcrumb/breadcrumb.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [BreadcrumbComponent],
  imports: [CommonModule, RouterModule, MatIconModule, TranslateModule],
  exports: [MatCardModule, PomCommonPipesModule, BreadcrumbComponent],
})
export class SharedModule {}
