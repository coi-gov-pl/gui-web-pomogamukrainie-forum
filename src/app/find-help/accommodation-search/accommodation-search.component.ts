import {Component, EventEmitter, NgModule, Output} from '@angular/core';
import {CommonModule} from "@angular/common";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

type Location = string; //TODO

interface AccommodationQuery {
  location?: Location;
  guests: number;
}

@Component({
  selector: 'app-accommodation-search',
  templateUrl: './accommodation-search.component.html',
  styleUrls: ['./accommodation-search.component.scss']
})
export class AccommodationSearchComponent {
  data: AccommodationQuery = {
    guests: 1
  }
  @Output()
  onSubmit = new EventEmitter<AccommodationQuery>()
}
@NgModule({
  declarations: [
    AccommodationSearchComponent
  ],
  exports: [
    AccommodationSearchComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
  ]
})
export class AccommodationSearchComponentModule {
}
