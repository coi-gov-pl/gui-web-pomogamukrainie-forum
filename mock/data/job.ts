import { JobOffer, JobOfferDefinitionDTO, OffersJobOffer } from '@app/core/api';

export const jobOffer = (body: JobOfferDefinitionDTO): JobOffer => {
  return {
    ...body,
    id: 1,
    userFirstName: 'example',
    modifiedDate: new Date().toISOString(),
    type: 'JOB',
  };
};

export const jobsList: OffersJobOffer = {
  content: [
    {
      id: 1,
      userFirstName: 'User First Name',
      title: 'Programista Angular',
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      phoneCountryCode: '48',
      phoneNumber: '516999666',
      modifiedDate: '2022-03-16T14:43:15Z',
      mode: 'ONSITE',
      location: { region: 'podkarpackie', city: 'Rzeszów' },
      industry: 'IT',
      workTime: ['FULL_TIME', 'PART_TIME'],
      contractType: ['B2B'],
      language: ['PL', 'UA'],
      type: 'JOB',
    },
    {
      id: 888,
      userFirstName: 'User First Name',
      title: 'Programista Java',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      phoneCountryCode: '48',
      phoneNumber: '516999666',
      modifiedDate: '2022-03-16T14:43:15Z',
      mode: 'ONSITE',
      location: { region: 'podkarpackie', city: 'Rzeszów' },
      industry: 'IT',
      workTime: ['FULL_TIME', 'PART_TIME'],
      contractType: ['B2B'],
      language: ['PL', 'UA'],
      type: 'JOB',
    },
  ],
  totalElements: 2,
  totalPages: 1,
};
