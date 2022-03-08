import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { environment } from 'src/environments/environment';
import { EnvironmentType } from 'src/environments/model';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (environment.environmentType === EnvironmentType.OFFAUTH) {
      return true;
    }
    if (this.authService.hasValidToken()) {
      return true;
    }
    this.authService.login();
    return false;
  }
}
