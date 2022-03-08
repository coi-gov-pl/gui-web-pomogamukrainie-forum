import { AuthConfig } from 'angular-oauth2-oidc';

export interface EnvironmentConfig {
  production: boolean;
  environmentType: EnvironmentType;
  authConfig: Required<Pick<AuthConfig, 'issuer' | 'showDebugInformation' | 'redirectUri'>>;
}

export enum EnvironmentType {
  PROD = 'prod',
  STAGE = 'stage',
  PRESTAGE = 'prestage',
  DEV = 'dev',
  OFFAUTH = 'offauth',
}
