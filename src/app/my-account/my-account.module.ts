import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyAccountComponent } from './my-account/my-account.component';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { MyAccountSettingsComponent } from './my-account-settings/my-account-settings.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '@app/shared/shared.module';
import { SearchResultComponentModule } from '../find-help/search-result/search-result.module';
import { MyAccountRoutingModule } from './my-account-routing.module';
import { ConfirmRemoveAdComponent } from './confirm-remove-ad/confirm-remove-ad.component';
import { PaginatorModule } from '@app/shared/components/paginator/paginator.module';
import { SortingHeaderModule } from '@app/shared/components';
import { ConfirmRemoveAccountComponent } from './confirm-remove-account/confirm-remove-account.component';

@NgModule({
  declarations: [
    MyAccountComponent,
    MyAccountSettingsComponent,
    ConfirmRemoveAdComponent,
    ConfirmRemoveAccountComponent,
  ],
  imports: [
    CommonModule,
    MyAccountRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    TranslateModule,
    SharedModule,
    SearchResultComponentModule,
    PaginatorModule,
    SortingHeaderModule,
  ],
})
export class MyAccountModule {}
