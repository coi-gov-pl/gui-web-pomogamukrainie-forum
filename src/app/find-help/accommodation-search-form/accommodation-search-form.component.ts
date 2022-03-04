import { Component, EventEmitter, NgModule, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MoreInfoLinkModule } from '../../core/components/more-info-link/more-info-link.component';

type Location = string; //TODO

interface AccommodationQuery {
  location?: Location;
  guests: number;
}

@Component({
  selector: 'app-accommodation-search-form',
  templateUrl: './accommodation-search-form.component.html',
  styleUrls: ['./accommodation-search-form.component.scss'],
})
export class AccommodationSearchFormComponent {
  data: AccommodationQuery = {
    guests: 1,
  };
  @Output()
  onSubmit = new EventEmitter<AccommodationQuery>();
}
@NgModule({
  declarations: [AccommodationSearchFormComponent],
  exports: [AccommodationSearchFormComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MoreInfoLinkModule,
  ],
})
export class AccommodationSearchFormComponentModule {}
