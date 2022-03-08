import { Injectable } from '@angular/core';
import { AuthSessionStorageKeys, UserProfile } from '../auth';
import { MemoryService } from '../auth/memory.service';

@Injectable({
  providedIn: 'root',
})
export class LoggedUserService {
  constructor(private readonly memoryService: MemoryService) {}

  private get user(): UserProfile | null {
    try {
      const claims: string = this.memoryService.getItem(AuthSessionStorageKeys.ID_TOKEN_CLAIMS_OBJ) || '{}';
      return JSON.parse(claims);
    } catch {
      return null;
    }
  }

  public get id(): string {
    return '';
  }

  public get fullName(): string {
    return this.user?.name || '';
  }
}
