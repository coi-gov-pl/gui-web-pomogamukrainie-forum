import { AuthConfig } from 'angular-oauth2-oidc';

export interface EnvironmentConfig {
  production: boolean;
  environmentType: EnvironmentType;
  authConfig: Required<Pick<AuthConfig, 'showDebugInformation' | 'redirectUri' | 'logoutUrl'>>;
  //   authConfig: Required<Pick<AuthConfig, 'issuer' | 'showDebugInformation' | 'redirectUri' | 'logoutUrl'>>;
  // applicationInsightsConnectionString?: string;
  recaptcha: {
    siteKey: string;
  };
}

export enum EnvironmentType {
  PROD = 'prod',
  STAGE = 'stage',
  PRESTAGE = 'prestage',
  DEV = 'dev',
  OFFAUTH = 'offauth',
}
