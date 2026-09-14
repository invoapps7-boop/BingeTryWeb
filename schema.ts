import type { Graph, Organization, SoftwareApplication, WebSite } from 'schema-dts';

export const organization: Organization = {
  '@type': 'Organization',
  name: 'Style BFF',
  alternateName: 'BingeTry',
  url: 'https://bingetry.com/',
};

export const website: WebSite = {
  '@type': 'WebSite',
  name: 'Style BFF',
  url: 'https://bingetry.com/',
};

export const app: SoftwareApplication = {
  '@type': 'SoftwareApplication',
  name: 'Style BFF',
  operatingSystem: 'iOS, Android',
  applicationCategory: 'LifestyleApplication',
};

export const sitewideGraph: Graph = {
  '@context': 'https://schema.org',
  '@graph': [organization, website, app],
};
