import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { distinctUntilChanged, filter, startWith } from 'rxjs';
import { Breadcrumb, BreadcrumbLabels } from '@app/shared/models';

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
        // console.log('event', event);
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
      const label: string = route.data['title'];
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
}

function findRootRoute(route: ActivatedRouteSnapshot): ActivatedRouteSnapshot {
  return route.parent == null ? route : findRootRoute(route.parent);
}
