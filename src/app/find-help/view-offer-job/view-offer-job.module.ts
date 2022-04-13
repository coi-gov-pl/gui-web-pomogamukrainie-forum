import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewOfferJobComponent } from './view-offer-job.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { ReplyOfferModule } from '../reply-offer/reply-offer.module';
import { BackToListModule } from '@app/shared/components/back-to-list/back-to-list.module';
import { SharedModule } from '@app/shared/shared.module';
import { ViewOfferJobRoutingModule } from './view-offer-job.routing.module';

@NgModule({
  declarations: [ViewOfferJobComponent],
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
    ReplyOfferModule,
    ViewOfferJobRoutingModule,
    BackToListModule,
    SharedModule,
  ],
  exports: [ViewOfferJobComponent],
})
export class ViewOfferJobModule {}
