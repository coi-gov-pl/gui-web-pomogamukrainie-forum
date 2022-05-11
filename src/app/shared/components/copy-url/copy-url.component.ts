import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UrlHelperService } from '@app/core/url';
import { ALERT_TYPES } from '@app/shared/models';
import { SnackbarService } from '@app/shared/services';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-copy-url',
  templateUrl: './copy-url.component.html',
  styleUrls: ['./copy-url.component.scss'],
})
export class CopyUrlComponent {
  constructor(
    private router: Router,
    private urlHelperService: UrlHelperService,
    private snackbarService: SnackbarService,
    private translateService: TranslateService
  ) {}

  copyUrl() {
    navigator.clipboard
      .writeText(this.urlHelperService.basePath(true) + this.router.url.substring(1))
      .then(() => {
        this.snackbarService.openBottomSnackAlert(
          this.translateService.instant(ALERT_TYPES.COPIED_URL),
          ALERT_TYPES.CONFIRM
        );
      })
      .catch((e) => console.error(e));
  }
}
