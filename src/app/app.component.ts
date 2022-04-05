import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LanguageCode } from '@app/core/translations';
import { StoreUrlService } from '@app/core/store-url';
import { ApplicationInsights } from '@microsoft/applicationinsights-web';
import { AngularPlugin } from '@microsoft/applicationinsights-angularplugin-js';
import { environment } from 'src/environments/environment';
import { LocalStorageKeys } from '@app/shared/models';
import { EnvironmentType } from '../environments/model';
import * as jQuery from 'jquery';

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
    if (
      environment.applicationInsightsConnectionString &&
      environment.applicationInsightsConnectionString !== '%BACKEND_REPLACED_APPLICATION_INSIGHTS_CONNECTION_STRING%'
    ) {
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
    if (environment.environmentType === EnvironmentType.PRESTAGE) {
      this.addJiraScript();
    }
  }

  getContentClass() {
    return this.router.url === '/' ? 'only-footer-padding' : 'header-footer-padding';
  }

  ngOnInit() {
    this.translateService.use(localStorage.getItem(LocalStorageKeys.LangOption) || LanguageCode.pl_PL);
    this.storeUrlService.setPreviousUrl();
  }

  private addJiraScript() {
    jQuery.ajax({
      url: 'https://jira.sysopspolska.pl/s/c666388bce7c1fc27eb02b84c763ada2-T/v69598/813018/1am8j4d/4.0.5/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs.js?locale=en-US&collectorId=dba66ae9',
      type: 'get',
      cache: true,
      dataType: 'script',
    });
  }
}
