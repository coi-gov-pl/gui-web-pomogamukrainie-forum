export * from './accommodationsResource.service';
import { AccommodationsResourceService } from './accommodationsResource.service';
export * from './cityLookupResource.service';
import { CityLookupResourceService } from './cityLookupResource.service';
export * from './jobsResource.service';
import { JobsResourceService } from './jobsResource.service';
export * from './materialAidResource.service';
import { MaterialAidResourceService } from './materialAidResource.service';
export * from './translationResource.service';
import { TranslationResourceService } from './translationResource.service';
export * from './transportResource.service';
import { TransportResourceService } from './transportResource.service';
export const APIS = [
  AccommodationsResourceService,
  CityLookupResourceService,
  JobsResourceService,
  MaterialAidResourceService,
  TranslationResourceService,
  TransportResourceService,
];
