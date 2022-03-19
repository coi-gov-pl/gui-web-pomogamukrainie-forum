import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutAppComponent } from './about-app/about-app.component';
import { SharedModule } from '@app/shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { AboutAppRoutingModule } from './about-app-routing.module';

@NgModule({
  declarations: [AboutAppComponent],
  imports: [
    CommonModule,
    SharedModule,
    AboutAppRoutingModule,

    MatCardModule,
    MatButtonModule,
    MatIconModule,
    TranslateModule,
  ],
})
export class AboutAppModule {}
