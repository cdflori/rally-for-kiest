/**
 * Everything a coalition volunteer is likely to need to update lives here
 * or in src/content/. Leave a link as an empty string and the button or
 * link that uses it is hidden instead of pointing nowhere.
 */
export const site = {
  name: 'Rally for Kiest',
  tagline: 'Free tennis for the kids of Oak Cliff and South Dallas, whoever holds the contract.',
  description:
    'Rally for Kiest is a coalition of neighbors, parents, players and students working to keep Kiest Tennis Center a place where any kid in Dallas can play for free.',

  /** Date the "where things stand" content was last reviewed. Update when you edit the tracker. */
  lastReviewed: '2026-10-24',

  links: {
    petition:
      'https://www.change.org/p/stop-city-of-dallas-from-awarding-rights-of-kiest-tennis-center-to-a-private-company',
    // TODO: link to the coalition's main social account(s).
    instagram: '',
    facebook: '',
    tiktok: '',
    // Contact address for the coalition (not a personal inbox).
    email: '',
    // City pages. Confirm these before launch.
    councilLookup: '',
    parksBoard: '',
    dtea: '',
  },

  /**
   * Upcoming public meetings and events. Shown on the home and Take action pages.
   * `date` is ISO (YYYY-MM-DD); past items are hidden automatically at build time.
   */
  events: [] as Array<{
    date: string;
    title: string;
    where: string;
    note?: string;
    link?: string;
  }>,
} as const;

export type Site = typeof site;
