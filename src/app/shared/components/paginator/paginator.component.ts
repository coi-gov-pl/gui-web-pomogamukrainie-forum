import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Pageable } from '@app/core/api';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageKeys } from '@app/shared/models';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PaginatorComponent implements OnInit {
  @Input() length: number | undefined;
  @Output() param: EventEmitter<void> = new EventEmitter<void>();

  public params$: Observable<Pageable> | undefined;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.params$ = this.route.queryParams;
  }

  async handlePageEvent(event: PageEvent) {
    const paginator = {
      page: event.pageIndex,
      size: event.pageSize,
    };
    localStorage.setItem(LocalStorageKeys.PageSize, JSON.stringify(event.pageSize));
    await this.router.navigate([], { relativeTo: this.route, queryParams: paginator, queryParamsHandling: 'merge' });
    this.param.emit();
  }
}
