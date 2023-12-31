import { FC } from 'react';

interface IBeers {
  type: string;
  beers: {
    name: string;
    brewery: string;
    abv: string;
    description: string;
    url?: string;
  }[];
}

const Beers: FC<IBeers> = ({ beers, type }) => {
  return (
    <div className="space-y-10 text-white">
      {beers.map((beer) => {
        return (
          <div key={beer.name} className="group block space-y-1.5 rounded-lg bg-gray-900 px-5 py-3 hover:bg-gray-800">
            <div className="font-medium text-gray-200 group-hover:text-gray-50 ">
              <a href={beer.url}>{beer.name}</a> ({beer.abv})
            </div>
            <div className="line-clamp-3 text-sm text-gray-400 group-hover:text-gray-300  ">
              {beer.description}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Beers;
