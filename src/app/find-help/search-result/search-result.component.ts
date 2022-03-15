import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Location } from '@app/core/api';
import { Router } from '@angular/router';
import { CategoryRoutingName } from '@app/shared/models';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent implements OnChanges {
  @Input()
  offerId!: number;
  @Input()
  category?: CategoryRoutingName;
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
  CategoryRoutingName = CategoryRoutingName;

  constructor(private router: Router) {}

  onViewOffer() {
    // this.router.navigate([CategoryRoutingName.FIND_HELP, this.category, this.offerId]);
    this.router.navigate(['znajdz-pomoc', 'view-offer-accommodation', this.offerId]);
  }

  ngOnChanges({ posted }: SimpleChanges) {
    console.log(CategoryRoutingName.FIND_HELP, this.category, this.offerId);
    const postedVal = posted.currentValue;
    if (postedVal === undefined || postedVal instanceof Date) {
      this.postedDate = postedVal;
    } else {
      this.postedDate = new Date(postedVal);
    }
  }
}
