import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sorting-header',
  templateUrl: './sorting-header.component.html',
  styleUrls: ['./sorting-header.component.scss'],
})
export class SortingHeaderComponent {
  @Input() total!: number;
  @Input() sortingOrder: 'ASCENDING' | 'DESCENDING' = 'ASCENDING';

  @Output() sortingOrderChange = new EventEmitter<'ASCENDING' | 'DESCENDING'>();

  changeOrder() {
    this.sortingOrder = this.sortingOrder === 'ASCENDING' ? 'DESCENDING' : 'ASCENDING';
    this.sortingOrderChange.emit(this.sortingOrder);
  }
}
