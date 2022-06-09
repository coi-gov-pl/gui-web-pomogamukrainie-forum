import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router, Params } from '@angular/router';
import { distinctUntilChanged, filter, startWith } from 'rxjs';
import { Breadcrumb, BreadcrumbLabels, LocalStorageKeys } from '@app/shared/models';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnInit {
  public breadcrumbs: Breadcrumb[] = [];
  public mainPage: Breadcrumb = {
    label: BreadcrumbLabels.MAIN_PAGE,
    url: '/',
  };
  public ads: Breadcrumb = {
    label: BreadcrumbLabels.ADS,
    url: '',
  };

  constructor(private router: Router, private route: ActivatedRoute) {}

  public ngOnInit() {
    this.breadcrumbs = this.buildBreadcrumbs();
    this.listeningOnRouterEvents();
  }

  private listeningOnRouterEvents(): void {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        distinctUntilChanged(),
        startWith(undefined)
      )
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.breadcrumbs = this.buildBreadcrumbs();
        }
        this.breadcrumbs = [this.mainPage, this.ads, ...this.breadcrumbs];
      });
  }

  private buildBreadcrumbs(): Breadcrumb[] {
    const breadcrumbs: Breadcrumb[] = [];
    let route: ActivatedRouteSnapshot | null = findRootRoute(this.route.snapshot);
    let path = [];
    while (route) {
      const label: string = route.data['breadcrumb']?.alias;
      const disabled = !!route.data['disabled'];
      const newSegments = route.url.map((segment) => segment.path);
      path.push(...newSegments);
      if (label) {
        breadcrumbs.push({ label, url: `/${path.join('/')}`, disabled });
      }
      route = route.firstChild;
    }
    return breadcrumbs;
  }

  activeRoute(): string {
    return this.router.url;
  }

  getParamsString(): string | null {
    const params = this.getParams();
    if (params) {
      let p = new HttpParams();
      p = p.appendAll(params as Params);
      return '?' + p.toString();
    }
    return null;
  }

  getParams(): Params | null {
    const params = localStorage
      .getItem(LocalStorageKeys.PageQuery)
      ?.split('&')
      .map((item) => item.split('='))
      .reduce((acc: Record<string, string>, param: string[]) => {
        acc[param[0]] = decodeURI(param[1]);
        return acc;
      }, {});
    return params as Params;
  }
}

function findRootRoute(route: ActivatedRouteSnapshot): ActivatedRouteSnapshot {
  return route.parent == null ? route : findRootRoute(route.parent);
}
