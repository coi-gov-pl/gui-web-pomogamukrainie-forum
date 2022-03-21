import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@app/shared/shared.module';
import { StatementRoutingModule } from './statement-routing.module';
import { StatementComponent } from './statement.component';

@NgModule({
  declarations: [StatementComponent],
  exports: [StatementComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    TranslateModule,
    SharedModule,
    StatementRoutingModule,
  ],
})
export class StatementModule {}
