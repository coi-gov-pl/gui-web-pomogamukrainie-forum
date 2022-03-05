import { Component, Input, NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { OfferLocation } from '../../api/types';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent {
  @Input()
  location?: OfferLocation;
  @Input()
  title!: string;
  @Input()
  description!: string;
  @Input()
  posted?: Date;
  @Input()
  attributes?: {
    icon: string;
    text: string;
  }[];
}

@NgModule({
  declarations: [SearchResultComponent],
  exports: [SearchResultComponent],
  imports: [MatCardModule, CommonModule, MatIconModule],
})
export class SearchResultComponentModule {}
