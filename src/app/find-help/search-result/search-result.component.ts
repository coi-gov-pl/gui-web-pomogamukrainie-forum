import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Location } from '@app/core/api';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent implements OnChanges {
  @Input()
  id?: number;
  @Input()
  location?: Location;
  @Input()
  destination?: Location;
  @Input()
  title!: string;
  @Input()
  description!: string;
  @Input()
  posted?: Date | string | undefined;

  postedDate: Date | undefined;

  ngOnChanges({ posted }: SimpleChanges) {
    const postedVal = posted.currentValue;
    if (postedVal === undefined || postedVal instanceof Date) {
      this.postedDate = postedVal;
    } else {
      this.postedDate = new Date(postedVal);
    }
  }
}
