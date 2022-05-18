import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LanguageCode } from '@app/core/translations';
import { StoreUrlService } from '@app/core/store-url';
import { ApplicationInsights } from '@microsoft/applicationinsights-web';
import { AngularPlugin } from '@microsoft/applicationinsights-angularplugin-js';
import { environment } from 'src/environments/environment';
import { LocalStorageKeys } from '@app/shared/models';
import { EnvironmentType } from '../environments/model';
import { filter, Subject, takeUntil } from 'rxjs';

declare global {
  interface Window {
    _paq: any;
  }
}

async function addJiraScript() {
  // Import jQuery dynamically so that it's only loaded if the JIRA script is needed.
  const { default: $ } = await import('jquery');

  // Set jQuery globals as the script below depends on it and if jQuery is imported,
  // the globals are not set by default.
  (globalThis as any).jQuery = (globalThis as any).$ = $;

  // Load the script.
  await $.ajax({
    url: 'https://jira.sysopspolska.pl/s/c666388bce7c1fc27eb02b84c763ada2-T/v69598/813018/1am8j4d/4.0.5/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs.js?locale=en-US&collectorId=dba66ae9',
    type: 'get',
    cache: true,
    dataType: 'script',
  });
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private destroyed$: Subject<void> = new Subject<void>();

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
      addJiraScript().catch((err) => {
        console.error('Loading the JIRA script failed:', err);
      });
    }

    this.trackUrl();
  }

  getContentClass() {
    return this.router.url === '/' ? 'only-footer-padding' : 'header-footer-padding';
  }

  ngOnInit() {
    this.translateService.use(localStorage.getItem(LocalStorageKeys.LangOption) || LanguageCode.pl_PL);
    this.storeUrlService.setPreviousUrl();
  }

  trackUrl(): void {
    this.router.events
      .pipe(
        takeUntil(this.destroyed$),
        filter((event) => event instanceof NavigationEnd)
      )
      .subscribe((event) => {
        let url = this.router.url;
        window._paq.push(['setCustomUrl', url]);
        window._paq.push(['trackPageView']);
      });
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.unsubscribe();
  }
}
