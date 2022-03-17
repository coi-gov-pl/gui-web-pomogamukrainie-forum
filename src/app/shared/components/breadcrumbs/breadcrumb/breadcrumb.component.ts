import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
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
    url: '',
  };

  constructor(private router: Router, private route: ActivatedRoute) {}

  public ngOnInit() {
    const currentUrlAsArray: string[] = this.router.url.split('/').slice(1);
    this.setBreadcrumbs(currentUrlAsArray);
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
          this.breadcrumbs = [];
          const currentUrlAsArray: string[] = event.url.split('/').slice(1);
          this.setBreadcrumbs(currentUrlAsArray);
        }
        this.breadcrumbs = [this.mainPage, ...this.breadcrumbs];
      });
  }

  private setBreadcrumbs(currentUrlAsArray: string[]): void {
    currentUrlAsArray.forEach((el: string, i: number) => {
      this.breadcrumbs.push({
        label: this.route.snapshot.children[i - 1]?.data['title'] || this.route.snapshot.data['title'],
        url: this.router.url
          .split('/')
          .slice(0, i + 2)
          .join('/'),
      });
    });
  }

  activeRoute(): string {
    return this.router.url;
  }
}
