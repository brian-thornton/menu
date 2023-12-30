export type Item = {
  name: string;
  slug: string;
  description?: string;
};

export const demos: { name: string; items: Item[] }[] = [
  {
    name: 'Beer / Cider / Selzer',
    items: [
      {
        name: 'IPAs',
        slug: 'ipas',
        description: 'Invented by the British to survive the long voyage to India!',
      },
      {
        name: 'English / Irish Ales',
        slug: 'ales',
        description: 'Ales and Stouts are a must in any English pub!',
      },
      {
        name: 'Lagers',
        slug: 'lagers',
        description: 'Lagers are the most popular beer in the world!',
      },
      {
        name: 'Ciders',
        slug: 'ciders',
        description: 'Forget applesauce, this is the best use for apples!',
      },
    ],
  },
  {
    name: 'Featured Burbons / Whiskeys',
    items: [
      {
        name: 'Loading',
        slug: 'loading',
        description:
          'Create meaningful Loading UI for specific parts of an app',
      },
      {
        name: 'Error',
        slug: 'error-handling',
        description: 'Create Error UI for specific parts of an app',
      },
      {
        name: 'Not Found',
        slug: 'not-found',
        description: 'Create Not Found UI for specific parts of an app',
      },
    ],
  },
  {
    name: 'Wines',
    items: [
      {
        name: 'Streaming with Suspense',
        slug: 'streaming',
        description:
          'Streaming data fetching from the server with React Suspense',
      },
      {
        name: 'Static Data',
        slug: 'ssg',
        description: 'Generate static pages',
      },
      {
        name: 'Dynamic Data',
        slug: 'ssr',
        description: 'Server-render pages',
      },
      {
        name: 'Incremental Static Regeneration',
        slug: 'isr',
        description: 'Get the best of both worlds between static & dynamic',
      },
    ],
  },
];
