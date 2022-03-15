import { EnvironmentConfig, EnvironmentType } from './model';

export const environment: EnvironmentConfig = {
  production: true,
  environmentType: EnvironmentType.PROD,
  authConfig: {
    issuer: `${window.location.origin}/auth/realms/POMOCUA`,
    showDebugInformation: false,
    redirectUri: `${window.location.origin}/ogloszenia`,
    logoutUrl: `${window.location.origin}/ogloszenia`,
  },
};
