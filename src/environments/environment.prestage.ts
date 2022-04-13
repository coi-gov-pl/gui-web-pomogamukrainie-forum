import { EnvironmentConfig, EnvironmentType } from './model';

export const environment: EnvironmentConfig = {
  production: true,
  environmentType: EnvironmentType.PRESTAGE,
  authConfig: {
    issuer: `${window.location.origin}/auth/realms/OGLOSZENIA`,
    showDebugInformation: false,
    redirectUri: `${window.location.origin}/ogloszenia/`,
    logoutUrl: `${window.location.origin}/ogloszenia/`,
  },
  applicationInsightsConnectionString: '%BACKEND_REPLACED_APPLICATION_INSIGHTS_CONNECTION_STRING%',
  recaptcha: {
    siteKey: '6LcwMgwfAAAAAPD1wNrK03I57gx8W2EzPylmGJl6',
  },
};
