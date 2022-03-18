import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { environment } from 'src/environments/environment';
import { EnvironmentType } from 'src/environments/model';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private readonly authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // dev
    if (environment.environmentType === EnvironmentType.OFFAUTH) {
      return true;
    }
    if (this.authService.isLoggedIn()) {
      return true;
    }
    this.authService.login(state.url);
    return false;
  }

  canLoad(route: Route, segments: UrlSegment[]) {
    // dev
    if (environment.environmentType === EnvironmentType.OFFAUTH) {
      return true;
    }
    if (this.authService.isLoggedIn()) {
      return true;
    }
    this.authService.login(`/${route.path}`);
    return false;
  }
}
