import { Component, Input, OnChanges } from '@angular/core';
import { Params, Router } from '@angular/router';
import { StoreUrlService } from '@app/core/store-url/store-url.service';
import { CategoryRoutingName, CorePath } from '@app/shared/models';

@Component({
  selector: 'app-back-to-list',
  templateUrl: './back-to-list.component.html',
  styleUrls: ['./back-to-list.component.scss'],
})
export class BackToListComponent implements OnChanges {
  @Input() categoryRouteName: CategoryRoutingName = CategoryRoutingName.ACCOMMODATION;
  @Input() redirectedFromAccount: boolean = false;
  @Input() originalAccountQueryParams?: Params;
  constructor(private readonly router: Router, private readonly storeUrlService: StoreUrlService) {}

  backRoute: string[] = [];
  queryParams: Params | null = null;

  ngOnChanges() {
    // if we are in context of "my account", navigate directly to /my-account instead of 'my-account/category'.
    if (this.redirectedFromAccount) {
      this.backRoute = ['/', CorePath.MyAccount];
      this.queryParams = this.originalAccountQueryParams ?? null;
    } else {
      this.backRoute = [this.router.url.replace(/\/[^/]+$/, '')];
      this.queryParams = this.storeUrlService.getParams(this.categoryRouteName);
    }
  }
}
