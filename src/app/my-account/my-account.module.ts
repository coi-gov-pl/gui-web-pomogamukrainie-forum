import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyAccountComponent } from './my-account/my-account.component';
import { MatCardModule } from '@angular/material/card';
import { TranslateModule } from '@ngx-translate/core';
import { MyAccountSettingsComponent } from './my-account-settings/my-account-settings.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [MyAccountComponent, MyAccountSettingsComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, TranslateModule, SharedModule],
})
export class MyAccountModule {}
