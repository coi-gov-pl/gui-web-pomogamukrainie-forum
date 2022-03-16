import { APP_INITIALIZER, InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OAuthModule, OAuthService, OAuthStorage } from 'angular-oauth2-oidc';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';
import { EnvironmentType } from 'src/environments/model';
import { MemoryService } from './memory.service';
import { AuthGuard } from './auth.guard';

function authFactory(authService: AuthService): () => Promise<boolean> {
  return () =>
    [EnvironmentType.OFFAUTH].includes(environment.environmentType)
      ? Promise.resolve(true)
      : authService
          .initAuth()
          .then((_) => Promise.resolve(true))
          .catch((_) => Promise.resolve(true));
}

export const STORAGE_INJECTION_TOKEN: InjectionToken<string> = new InjectionToken<string>('storageToken');

@NgModule({
  imports: [CommonModule, OAuthModule.forRoot()],
  providers: [
    OAuthService,
    AuthService,
    MemoryService,
    AuthGuard,
    { provide: STORAGE_INJECTION_TOKEN, useValue: '_ukr_ogloszenia' },
    { provide: OAuthStorage, useExisting: MemoryService },
    {
      provide: APP_INITIALIZER,
      useFactory: authFactory,
      deps: [AuthService],
      multi: true,
    },
  ],
})
export class AuthModule {}
