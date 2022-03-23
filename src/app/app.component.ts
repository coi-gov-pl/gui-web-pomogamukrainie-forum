import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LanguageCode } from '@app/core/translations';
import { StoreUrlService } from '@app/core/store-url';
import { ApplicationInsights } from '@microsoft/applicationinsights-web';
import { AngularPlugin } from '@microsoft/applicationinsights-angularplugin-js';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private translateService: TranslateService,
    private storeUrlService: StoreUrlService
  ) {
    if (environment.applicationInsightsConnectionString) {
      const angularPlugin = new AngularPlugin();
      const appInsights = new ApplicationInsights({
        config: {
          connectionString: environment.applicationInsightsConnectionString,
          extensions: [angularPlugin],
          extensionConfig: {
            [angularPlugin.identifier]: { router: this.router },
          },
        },
      });
      appInsights.loadAppInsights();
    }
  }

  getContentClass() {
    return this.router.url === '/' ? 'only-footer-padding' : 'header-footer-padding';
  }

  ngOnInit() {
    this.translateService.use(LanguageCode.pl_PL);
    this.storeUrlService.setPreviousUrl();
  }
}
