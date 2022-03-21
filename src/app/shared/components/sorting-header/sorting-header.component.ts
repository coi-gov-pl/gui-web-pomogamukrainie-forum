import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sorting-header',
  templateUrl: './sorting-header.component.html',
  styleUrls: ['./sorting-header.component.scss'],
})
export class SortingHeaderComponent {
  @Input() total!: number;
  @Input() sortingOrder: 'desc' | 'asc' = 'desc';

  @Output() sortingOrderChange = new EventEmitter<'desc' | 'asc'>();

  changeOrder() {
    this.sortingOrder = this.sortingOrder === 'asc' ? 'desc' : 'asc';
    this.sortingOrderChange.emit(this.sortingOrder);
  }
}
