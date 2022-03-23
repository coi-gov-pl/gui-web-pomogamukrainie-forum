import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { ApiModule } from '../api/api.module';
import { Configuration } from '../api/configuration';

@NgModule({
  imports: [HttpClientModule, ApiModule.forRoot(() => new Configuration({ basePath: '/ogloszenia' }))],
})
export class ApiHelperModule {
  constructor(@Optional() @SkipSelf() parentModule: ApiHelperModule) {
    if (parentModule) {
      throw new Error('ApiHelperModule is already loaded. Import in your base AppModule only.');
    }
  }
}
