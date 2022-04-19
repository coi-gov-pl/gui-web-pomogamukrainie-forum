import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReplyOfferModule } from '../reply-offer/reply-offer.module';
import { BackToListModule } from '@app/shared/components/back-to-list/back-to-list.module';
import { SharedModule } from '@app/shared/shared.module';
import { ViewOfferHealthCareComponent } from './view-offer-health-care.component';
import { ViewOfferHealthRoutingModule } from './view-offer-health-care.routing.module';

@NgModule({
  declarations: [ViewOfferHealthCareComponent],
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
    ViewOfferHealthRoutingModule,
    BackToListModule,
    SharedModule,
  ],
  exports: [ViewOfferHealthCareComponent],
})
export class ViewOfferHealthCareModule {}
