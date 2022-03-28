import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CorePath } from '@app/shared/models';

@Component({
  selector: 'app-site-footer',
  templateUrl: './site-footer.component.html',
  styleUrls: ['./site-footer.component.scss'],
})
export class SiteFooterComponent {
  corePath = CorePath;
  constructor(private router: Router, private viewportScroller: ViewportScroller) {}

  viewAbout() {
    this.router.navigate([CorePath.About]).then(() => {
      this.viewportScroller.scrollToPosition([0, 0]);
    });
  }
}
