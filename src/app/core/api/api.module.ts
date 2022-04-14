import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';

import { AccommodationsResourceService } from './api/accommodationsResource.service';
import { CityLookupResourceService } from './api/cityLookupResource.service';
import { JobResourceService } from './api/jobResource.service';
import { LawResourceService } from './api/lawResource.service';
import { MaterialAidResourceService } from './api/materialAidResource.service';
import { MessageResourceService } from './api/messageResource.service';
import { MyOffersResourceService } from './api/myOffersResource.service';
import { TransportResourceService } from './api/transportResource.service';
import { UsersResourceService } from './api/usersResource.service';

@NgModule({
  imports: [],
  declarations: [],
  exports: [],
  providers: [],
})
export class ApiModule {
  public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [{ provide: Configuration, useFactory: configurationFactory }],
    };
  }

  constructor(@Optional() @SkipSelf() parentModule: ApiModule, @Optional() http: HttpClient) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error(
        'You need to import the HttpClientModule in your AppModule! \n' +
          'See also https://github.com/angular/angular/issues/20575'
      );
    }
  }
}
