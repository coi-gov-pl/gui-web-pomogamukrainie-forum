import { Injectable } from '@angular/core';
import { AuthService } from '@app/core/auth';

@Injectable({
  providedIn: 'root',
})
export class LoggedUserService {
  constructor(protected readonly authService: AuthService) {}
}
