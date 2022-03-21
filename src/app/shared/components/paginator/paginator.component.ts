import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Pageable } from '@app/core/api';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PaginatorComponent {
  @Input() length: number | undefined;
  @Output() param: EventEmitter<Pageable> = new EventEmitter<Pageable>();

  constructor() {}

  handlePageEvent(event: PageEvent) {
    this.param.emit({
      page: event.pageIndex,
      size: event.pageSize,
    });
  }
}
