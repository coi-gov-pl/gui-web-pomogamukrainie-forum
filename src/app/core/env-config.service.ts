import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocationStrategy } from '@angular/common';
import { EMPTY, Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';

export interface EnvConfig {}

@Injectable({
  providedIn: 'root',
})
export class EnvConfigService {
  static readonly CONFIGURATION_FILE_NAME: string = 'envConfig.json';

  /**
   * Environment config.
   * @private
   */
  private _envConfig: EnvConfig;

  constructor(private locationStrategy: LocationStrategy, private httpClient: HttpClient) {
    this._envConfig = this.createDefaultEnvConfig();
  }

  /**
   * Getter for _envConfig.
   */
  get envConfig(): EnvConfig {
    return this._envConfig;
  }

  /**
   * Fetches file containing environment configuration if useEnvConfig in environment.ts is set to true.
   */
  init(): Observable<EnvConfig> {
    return environment.useEnvConfig ? this.getEnvConfig() : EMPTY;
  }

  /**
   * Fetches file containing environment configuration.
   * @private
   */
  private getEnvConfig(): Observable<EnvConfig> {
    return this.httpClient
      .get<EnvConfig>(`${this.locationStrategy.getBaseHref()}${EnvConfigService.CONFIGURATION_FILE_NAME}`)
      .pipe(tap((value) => (this._envConfig = value)));
  }

  /**
   * Creates default configuration.
   * @private
   */
  private createDefaultEnvConfig(): EnvConfig {
    return {};
  }
}
