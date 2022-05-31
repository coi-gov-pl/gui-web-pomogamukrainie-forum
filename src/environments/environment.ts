// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { EnvironmentConfig, EnvironmentType } from './model';

export const environment: EnvironmentConfig = {
  production: false,
  environmentType: EnvironmentType.OFFAUTH,
  authConfig: {
    // issuer docker: https://github.com/coi-gov-pl/pomocua-ogloszenia
    issuer: 'https://local.pomagamukrainie.gov.pl/auth/realms/POMOCUA',
    showDebugInformation: true,
    redirectUri: window.location.origin,
    logoutUrl: window.location.origin,
  },
  applicationInsightsConnectionString: '%BACKEND_REPLACED_APPLICATION_INSIGHTS_CONNECTION_STRING%',
  recaptcha: {
    siteKey: '', // @TODO key dev?
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
