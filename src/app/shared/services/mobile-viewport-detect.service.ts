import { Injectable } from '@angular/core';
import { BOOTSTRAP5_BREAKPOINTS } from '../consts';

@Injectable()
export class MobileViewportDetectService {
  innerWidth: number = window.innerWidth;

  get isMobileView() {
    return this.innerWidth < BOOTSTRAP5_BREAKPOINTS.md;
  }
}
