import { Injectable } from '@angular/core';
import { ActivatedRoute, Params, Router, RoutesRecognized } from '@angular/router';
import { filter, pairwise } from 'rxjs';
import { CategoryRoutingName } from '@app/shared/models';
import { LocalStorageKeys } from '@app/shared/models';

@Injectable({
  providedIn: 'root',
})
export class StoreUrlService {
  constructor(private router: Router, private route: ActivatedRoute) {}

  setPreviousUrl(): void {
    this.router.events
      .pipe(
        filter((evt: any) => evt instanceof RoutesRecognized),
        pairwise()
      )
      .subscribe((events: RoutesRecognized[]) => {
        if (events[0].urlAfterRedirects.includes('?')) {
          localStorage.setItem(LocalStorageKeys.PageUrl, events[0].urlAfterRedirects.split('?')[0]);
          localStorage.setItem(LocalStorageKeys.PageQuery, events[0].urlAfterRedirects.split('?')[1]);
        }
      });
  }

  get getPreviousUrl(): string | null {
    return localStorage.getItem(LocalStorageKeys.PageUrl);
  }

  getParams(routing: CategoryRoutingName): Params | null {
    const params = localStorage
      .getItem(LocalStorageKeys.PageQuery)
      ?.split('&')
      .map((item) => item.split('='))
      .reduce((acc: Record<string, string>, param: string[]) => {
        acc[param[0]] = param[1];
        return acc;
      }, {});
    return this.getPreviousUrl?.includes(routing) ? (params as Params) : null;
  }

  async setDefaultPaginatorParam(): Promise<void> {
    await this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        page: 0,
        size: localStorage.getItem(LocalStorageKeys.PageSize) ?? 5,
      },
      queryParamsHandling: 'merge',
    });
  }

  async setCustomPaginatorParam(param: Params): Promise<void> {
    await this.router.navigate([], {
      relativeTo: this.route,
      queryParams: param,
      queryParamsHandling: 'merge',
    });
  }
}
