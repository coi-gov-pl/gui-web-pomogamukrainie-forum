import { Injectable } from '@angular/core';
import { Params, Router, RoutesRecognized } from '@angular/router';
import { filter, pairwise } from 'rxjs';
import { CategoryRoutingName } from '@app/shared/models';

@Injectable({
  providedIn: 'root',
})
export class StoreUrlService {
  constructor(private router: Router) {}

  setPreviousUrl(): void {
    this.router.events
      .pipe(
        filter((evt: any) => evt instanceof RoutesRecognized),
        pairwise()
      )
      .subscribe((events: RoutesRecognized[]) => {
        if (events[0].urlAfterRedirects.includes('?')) {
          localStorage.setItem('pomagamukrainie-url', events[0].urlAfterRedirects.split('?')[0]);
          localStorage.setItem('pomagamukrainie-query', events[0].urlAfterRedirects.split('?')[1]);
        }
      });
  }

  get getPreviousUrl(): string | null {
    return localStorage.getItem('pomagamukrainie-url');
  }

  getParams(routing: CategoryRoutingName): Params | null {
    const params = localStorage
      .getItem('pomagamukrainie-query')
      ?.split('&')
      .map((item) => item.split('='))
      .reduce((acc: Record<string, string>, param: string[]) => {
        acc[param[0]] = param[1];
        return acc;
      }, {});
    return this.getPreviousUrl?.includes(routing) ? (params as Params) : null;
  }
}
