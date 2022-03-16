import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyAccountComponent } from './my-account/my-account.component';
import { MatCardModule } from '@angular/material/card';
import { TranslateModule } from '@ngx-translate/core';
import { MyAccountSettingsComponent } from './my-account-settings/my-account-settings.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '@app/shared/shared.module';
import { SearchResultComponentModule } from '../find-help/search-result/search-result.module';
import { MyAccountRoutingModule } from './my-account-routing.module';

@NgModule({
  declarations: [MyAccountComponent, MyAccountSettingsComponent],
  imports: [
    CommonModule,
    MyAccountRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    TranslateModule,
    SharedModule,
    SearchResultComponentModule,
  ],
})
export class MyAccountModule {}
