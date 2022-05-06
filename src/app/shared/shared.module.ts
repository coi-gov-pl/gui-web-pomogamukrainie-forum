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
import { TruncatePipe, TranslateArrayPipe } from '@app/shared/pipes';
import { PhoneInputModule } from './components/phone-input/phone-input.module';
import { PhoneInputComponent } from './components/phone-input/phone-input.component';
import { CopyUrlComponent } from './components/copy-url/copy-url.component';
@NgModule({
  declarations: [BreadcrumbComponent, TruncatePipe, ConfirmCancelDialogComponent, TranslateArrayPipe, CopyUrlComponent],
  imports: [CommonModule, RouterModule, MatIconModule, TranslateModule, PhoneInputModule],
  exports: [
    MatCardModule,
    PomCommonPipesModule,
    BreadcrumbComponent,
    ValidatorsDirectivesModule,
    TruncatePipe,
    TranslateArrayPipe,
    PhoneInputComponent,
    CopyUrlComponent,
  ],
})
export class SharedModule {}
