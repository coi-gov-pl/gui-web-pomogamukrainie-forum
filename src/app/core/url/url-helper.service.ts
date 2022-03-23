import { Injectable, Inject } from '@angular/core';
import { Location, APP_BASE_HREF, PlatformLocation } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class UrlHelperService {
  /** url without baseHref */
  protected _origin: string;

  /** url with baseHref */
  protected _absolutePath: string;

  /** path img */
  protected _imagesPath: string;

  constructor(protected location: Location, @Inject(APP_BASE_HREF) protected _baseHref: string) {
    if (!_baseHref.startsWith('/') || !this._baseHref.endsWith('/')) {
      throw new Error('Parameter --base-href or APP_BASE_HREF must start and end with /');
    }
    this._origin = this.stripTrailingSlash(window.location.origin);
    this._absolutePath = this._origin + this._baseHref;
    this._imagesPath = `${this._baseHref}assets/images/`;
  }

  /** Url absolute/relative */
  public basePath(absolutePath: boolean = false): string {
    return absolutePath ? this._absolutePath : this._baseHref;
  }

  /** Url images | absolute/relative */
  public imagesPath(absolutePath: boolean = false): string {
    return absolutePath ? this._origin + this._imagesPath : this._imagesPath;
  }

  public originPath(): string {
    return this._origin;
  }

  protected stripTrailingSlash(val: string): string {
    return val.endsWith('/') ? val.slice(0, -1) : val;
  }
}
