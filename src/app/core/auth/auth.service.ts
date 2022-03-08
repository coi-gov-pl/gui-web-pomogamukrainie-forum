import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthService {
  constructor(protected readonly oAuthService: OAuthService) {
    this.oAuthService.configure(this.createAuthConfig());
  }

  public initAuth(): Promise<boolean> {
    return this.oAuthService.loadDiscoveryDocumentAndTryLogin();
  }

  public login(): void {
    this.oAuthService.initCodeFlow();
  }

  public logout() {
    this.oAuthService.logOut();
  }
  public hasValidToken() {
    return this.oAuthService.hasValidAccessToken();
  }

  private createAuthConfig(): AuthConfig {
    return {
      issuer: environment.authConfig.issuer,
      redirectUri: environment.authConfig.redirectUri,
      clientId: 'pomocua-ogloszenia',
      responseType: 'code',
      showDebugInformation: environment.authConfig.showDebugInformation,
    };
  }
}
