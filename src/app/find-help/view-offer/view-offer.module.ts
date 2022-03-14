import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { ReplyOfferRoutingModule } from './view-offer.routing.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ViewOfferComponent } from './view-offer.component';
import { ReplyOfferModule } from '../reply-offer/reply-offer.module';

@NgModule({
  declarations: [ViewOfferComponent],
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
    ReplyOfferModule,
  ],
  exports: [ViewOfferComponent],
})
export class ViewOfferModule {}
