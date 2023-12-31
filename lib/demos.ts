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
        name: 'Burbons',
        slug: 'burbons',
        description:
          'Bourbon is a type of American whiskey that is a barrel-aged distilled liquor made mainly from corn.',
      },
    ],
  },
];
