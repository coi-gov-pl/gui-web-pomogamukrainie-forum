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

  public updateProfile(): void {
    this.oAuthService.initCodeFlow(undefined, { kc_action: 'UPDATE_PROFILE' });
  }

  public logOut(): void {
    this.oAuthService.logOut();
  }

  public isLoggedIn(): boolean {
    return this.oAuthService.hasValidAccessToken() && this.oAuthService.hasValidIdToken();
  }

  private createAuthConfig(): AuthConfig {
    return {
      issuer: environment.authConfig.issuer,
      redirectUri: environment.authConfig.redirectUri,
      clientId: 'ogloszenia-fe',
      responseType: 'code',
      showDebugInformation: environment.authConfig.showDebugInformation,
    };
  }
}
