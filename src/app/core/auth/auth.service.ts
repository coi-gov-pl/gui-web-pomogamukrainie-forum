import { Injectable } from '@angular/core';
import { AuthConfig, OAuthErrorEvent, OAuthService } from 'angular-oauth2-oidc';
import { filter } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthSessionStorageKeys } from './model';

@Injectable()
export class AuthService {
  constructor(protected readonly oAuthService: OAuthService) {}

  public initAuth(): Promise<boolean> {
    this.oAuthService.configure(this.createAuthConfig());
    return this.oAuthService
      .loadDiscoveryDocumentAndTryLogin()
      .then((_) => this.automaticSilentRefresh())
      .catch((_) => Promise.resolve(true));
  }

  /**
   * this is a workaround with sessionStorage
   * dynamic redirect to a specific url, this library probably has a bug
   */
  public login(url: string): void {
    sessionStorage.setItem(AuthSessionStorageKeys.CUSTOM_REDIRECT_URI, environment.authConfig.redirectUri + url);
    this.oAuthService.redirectUri = sessionStorage.getItem(AuthSessionStorageKeys.CUSTOM_REDIRECT_URI) + '';
    this.oAuthService.initCodeFlow();
  }

  public updateProfile(): void {
    this.oAuthService.initCodeFlow(undefined, { kc_action: 'UPDATE_PROFILE' });
  }

  public idleLogout(): void {
    this.oAuthService.events.pipe(filter((e) => e.type === 'session_terminated')).subscribe((e) => {
      return console.log('idleLogout(): Your session has been terminated!');
    });
  }

  public sessionEvents(): void {
    this.oAuthService.events.subscribe((e) => {
      return console.log('sessionEvents()', e);
    });
  }

  public logOut(): void {
    this.oAuthService.postLogoutRedirectUri = environment.authConfig.redirectUri;
    this.oAuthService.logOut();
  }

  public isLoggedIn(): boolean {
    return this.oAuthService.hasValidAccessToken() && this.oAuthService.hasValidIdToken();
  }

  public automaticSilentRefresh(): Promise<boolean> {
    if (this.isLoggedIn()) {
      this.oAuthService.events.pipe(filter((res) => res instanceof OAuthErrorEvent)).subscribe((error) => {
        console.log('oAuthService.events error', error);
        if (error.type === 'token_refresh_error') {
          this.logOut();
        }
      });
      this.oAuthService.setupAutomaticSilentRefresh();
    }
    return Promise.resolve(true);
  }

  private createAuthConfig(): AuthConfig {
    return {
      issuer: environment.authConfig.issuer,
      redirectUri:
        sessionStorage.getItem(AuthSessionStorageKeys.CUSTOM_REDIRECT_URI) + '' || environment.authConfig.redirectUri,
      clientId: 'ogloszenia-fe',
      responseType: 'code',
      showDebugInformation: environment.authConfig.showDebugInformation,
      openUri: (url: string): void => {
        // this is a workaround. this.updateProfile() failed to redirect to change email
        setTimeout(() => {
          window.location.href = url;
        });
      },
    };
  }
}
function subscribe(e: any): import('rxjs').OperatorFunction<import('angular-oauth2-oidc').OAuthEvent, unknown> {
  throw new Error('Function not implemented.');
}
