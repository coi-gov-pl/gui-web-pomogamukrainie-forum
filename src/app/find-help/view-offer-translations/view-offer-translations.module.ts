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
import { ViewOfferTranslationsComponent } from './view-offer-translations.component';
import { ViewOfferTranslationsRoutingModule } from './view-offer-translations.routing.module';
import { BackToListModule } from '@app/shared/components/back-to-list/back-to-list.module';
import { SharedModule } from '@app/shared/shared.module';
import { ReadMoreModule } from '@app/shared/components';

@NgModule({
  declarations: [ViewOfferTranslationsComponent],
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
    ViewOfferTranslationsRoutingModule,
    BackToListModule,
    SharedModule,
    ReadMoreModule,
  ],
  exports: [ViewOfferTranslationsComponent],
})
export class ViewOfferTranslationsModule {}
