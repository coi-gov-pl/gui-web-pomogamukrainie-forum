import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublishAdButtonComponent } from './publish-ad-button/publish-ad-button.component';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { OfferTitleInputComponent } from './offer-title-input/offer-title-input.component';
import { MatInputModule } from '@angular/material/input';
import { FieldErrorModule } from '@app/shared/components';
import { ValidatorsDirectivesModule } from '@app/shared/validators';

@NgModule({
  declarations: [PublishAdButtonComponent, OfferTitleInputComponent],
  exports: [PublishAdButtonComponent, OfferTitleInputComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    TranslateModule,
    MatInputModule,
    FieldErrorModule,
    ValidatorsDirectivesModule,
  ],
})
export class GiveHelpFormModule {}
