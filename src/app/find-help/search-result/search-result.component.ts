import { Component, Input } from '@angular/core';
import { Location } from '../../../api';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent {
  @Input()
  location?: Location;
  @Input()
  destination?: Location;
  @Input()
  title!: string;
  @Input()
  description!: string;
  @Input()
  posted?: Date;
}
