import { Injectable } from '@angular/core';
import { CanActivate, CanLoad } from '@angular/router';
import { environment } from 'src/environments/environment';
import { EnvironmentType } from 'src/environments/model';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private readonly authService: AuthService) {}

  canActivate(): boolean {
    // dev
    if (environment.environmentType === EnvironmentType.OFFAUTH) {
      return true;
    }
    if (this.authService.isLoggedIn()) {
      return true;
    }
    this.authService.login();
    return false;
  }

  canLoad(): boolean {
    // dev
    if (environment.environmentType === EnvironmentType.OFFAUTH) {
      return true;
    }
    if (this.authService.isLoggedIn()) {
      return true;
    }
    this.authService.login();
    return false;
  }
}
