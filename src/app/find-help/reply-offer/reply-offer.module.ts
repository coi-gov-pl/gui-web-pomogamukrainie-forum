import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { ReplyOfferComponent } from './reply-offer.component';
import { ReplyOfferRoutingModule } from './reply-offer.routing.module';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [ReplyOfferComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    MatCardModule,
    TranslateModule,
    MatIconModule,
    ReplyOfferRoutingModule,
  ],
  exports: [ReplyOfferComponent],
})
export class ReplyOfferModule {}
