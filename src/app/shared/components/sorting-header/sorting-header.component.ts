import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SortingFieldName, SortingOrder } from '@app/shared/models/sortingOrder.model';

@Component({
  selector: 'app-sorting-header',
  templateUrl: './sorting-header.component.html',
  styleUrls: ['./sorting-header.component.scss'],
})
export class SortingHeaderComponent implements OnInit {
  @Input() total!: number;
  sortField = SortingFieldName;
  fieldOrder = SortingOrder.descending;

  @Output() sortingOrderChange = new EventEmitter<string>();

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(({ sort }: any) => {
      if (Array.isArray(sort)) {
        sort = sort?.find((item) => item?.includes(this.sortField));
      }
      this.fieldOrder = sort?.split(',')?.[1] ?? this.fieldOrder;
    });
  }

  async changeOrder() {
    this.fieldOrder = this.fieldOrder === SortingOrder.descending ? SortingOrder.ascending : SortingOrder.descending;
    const queryParams = {
      sort: `${this.sortField},${this.fieldOrder}`,
    };
    await this.router.navigate([], { relativeTo: this.route, queryParams, queryParamsHandling: 'merge' });
    this.sortingOrderChange.emit(this.fieldOrder);
  }
}
