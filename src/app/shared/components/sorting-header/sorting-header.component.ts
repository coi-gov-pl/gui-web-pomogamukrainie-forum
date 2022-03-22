import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sorting-header',
  templateUrl: './sorting-header.component.html',
  styleUrls: ['./sorting-header.component.scss'],
})
export class SortingHeaderComponent implements OnInit {
  @Input() total!: number;
  sortField = 'modifiedDate';
  fieldOrder: string = 'desc';

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
    this.fieldOrder = this.fieldOrder === 'desc' ? 'asc' : 'desc';
    const queryParams = {
      sort: `${this.sortField},${this.fieldOrder}`,
    };
    await this.router.navigate([], { relativeTo: this.route, queryParams, queryParamsHandling: 'merge' });
    this.sortingOrderChange.emit(this.fieldOrder);
  }
}
