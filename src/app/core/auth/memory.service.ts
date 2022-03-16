import { Inject, Injectable } from '@angular/core';
import { OAuthStorage } from 'angular-oauth2-oidc';
import { STORAGE_INJECTION_TOKEN } from './auth.module';

@Injectable()
export class MemoryService implements OAuthStorage {
  constructor(@Inject(STORAGE_INJECTION_TOKEN) private storageToken: string) {}

  getItem(key: string): string | null {
    return sessionStorage.getItem(key + this.storageToken);
  }

  removeItem(key: string): void {
    sessionStorage.removeItem(key + this.storageToken);
  }

  setItem(key: string, data: string): void {
    sessionStorage.setItem(key + this.storageToken, data);
  }
}
