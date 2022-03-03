import {Component, EventEmitter, NgModule, Output,} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

export interface Offer {
  title: string;
  description: string;
}

@Component({
  selector: 'app-offer-form',
  templateUrl: './offer-form.component.html',
  styleUrls: ['./offer-form.component.scss'],
})
export class OfferFormComponent {
  data: Offer = {
    title: '',
    description: '',
  };

  @Output() onSubmit = new EventEmitter<Offer>();
}

@NgModule({
  declarations: [OfferFormComponent],
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports: [OfferFormComponent],
})
export class OfferFormComponentModule {}
