export * from './accommodationsResource.service';
import { AccommodationsResourceService } from './accommodationsResource.service';
export * from './cityLookupResource.service';
import { CityLookupResourceService } from './cityLookupResource.service';
export * from './healthResource.service';
import { HealthResourceService } from './healthResource.service';
export * from './jobResource.service';
import { JobResourceService } from './jobResource.service';
export * from './lawResource.service';
import { LawResourceService } from './lawResource.service';
export * from './materialAidResource.service';
import { MaterialAidResourceService } from './materialAidResource.service';
export * from './messageResource.service';
import { MessageResourceService } from './messageResource.service';
export * from './myOffersResource.service';
import { MyOffersResourceService } from './myOffersResource.service';
export * from './translationResource.service';
import { TranslationResourceService } from './translationResource.service';
export * from './transportResource.service';
import { TransportResourceService } from './transportResource.service';
import { TranslationsResourceService } from './translationsResource.service';
export * from './usersResource.service';
import { UsersResourceService } from './usersResource.service';
export const APIS = [
  AccommodationsResourceService,
  CityLookupResourceService,
  HealthResourceService,
  JobResourceService,
  LawResourceService,
  MaterialAidResourceService,
  MessageResourceService,
  MyOffersResourceService,
  TranslationResourceService,
  TransportResourceService,
  UsersResourceService,
  TranslationsResourceService,
];
