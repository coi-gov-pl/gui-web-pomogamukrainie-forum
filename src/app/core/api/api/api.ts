export * from './accommodationsResource.service';
import { AccommodationsResourceService } from './accommodationsResource.service';
export * from './cityLookupResource.service';
import { CityLookupResourceService } from './cityLookupResource.service';
export * from './jobResource.service';
import { JobResourceService } from './jobResource.service';
export * from './materialAidResource.service';
import { MaterialAidResourceService } from './materialAidResource.service';
export * from './messageResource.service';
import { MessageResourceService } from './messageResource.service';
export * from './myOffersResource.service';
import { MyOffersResourceService } from './myOffersResource.service';
export * from './transportResource.service';
import { TransportResourceService } from './transportResource.service';
export * from './usersResource.service';
import { UsersResourceService } from './usersResource.service';
export const APIS = [
  AccommodationsResourceService,
  CityLookupResourceService,
  JobResourceService,
  MaterialAidResourceService,
  MessageResourceService,
  MyOffersResourceService,
  TransportResourceService,
  UsersResourceService,
];
