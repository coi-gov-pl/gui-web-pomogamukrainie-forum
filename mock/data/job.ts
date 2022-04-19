import { JobOfferDefinitionDTO, JobOffer } from '@app/core/api';

export const jobOffer = (body: JobOfferDefinitionDTO): JobOffer => {
  return {
    ...body,
    id: 1,
    userFirstName: 'example',
    modifiedDate: new Date().toISOString(),
    type: 'JOB',
  };
};
