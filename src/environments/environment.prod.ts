import { EnvironmentConfig, EnvironmentType } from './model';

export const environment: EnvironmentConfig = {
  production: true,
  environmentType: EnvironmentType.PROD,
  authConfig: {
    // issuer: `${window.location.origin}/auth/realms/OGLOSZENIA`,
    showDebugInformation: false,
    redirectUri: `${window.location.origin}/ogloszenia/`,
    logoutUrl: `${window.location.origin}/ogloszenia/`,
  },
  applicationInsightsConnectionString: '%BACKEND_REPLACED_APPLICATION_INSIGHTS_CONNECTION_STRING%',
  recaptcha: {
    siteKey: '6LcdMQkfAAAAAEbSBUhhCJrEGUQIJ8Y_CbLeMOVB',
  },
};
