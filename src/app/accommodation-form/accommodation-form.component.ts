import {Component, NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {Offer, OfferFormComponentModule} from "../offer-form/offer-form.component";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";

interface Accommodation {
  location: string;
  guests: number |undefined;
  lengthOfStay: string|undefined;
  hostLanguages: string[];
}
@Component({
  selector: 'app-accommodation-form',
  templateUrl: './accommodation-form.component.html',
  styleUrls: ['./accommodation-form.component.scss']
})
export class AccommodationFormComponent {
  data:Accommodation= {
    location: '',
    guests: undefined,
    lengthOfStay: undefined,
    hostLanguages: []
  }

  handleSubmit(offer: Offer) {
    console.log({
      ...offer,
      ...this.data,
    })
  }

}

@NgModule({
  declarations: [
    AccommodationFormComponent
  ],
  imports: [
    MatFormFieldModule,
    OfferFormComponentModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
  ],
  exports:[AccommodationFormComponent]
})
export class AccommodationFormComponentModule { }
