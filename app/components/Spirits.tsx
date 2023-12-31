import { FC } from 'react';

interface ISpirits {
  type: string;
  beers: {
    name: string;
    brewery: string;
    proof: string;
    description: string;
    url?: string;
  }[];
}

const Spirits: FC<ISpirits> = ({ beers, type }) => {
  return (
    <div className="space-y-10 text-white">
      {beers.map((beer) => {
        return (
          <div className="group block space-y-1.5 rounded-lg bg-gray-900 px-5 py-3 hover:bg-gray-800">
            <div className="font-medium text-gray-200 group-hover:text-gray-50 ">
              <a href={beer.url}>{beer.name}</a> ({beer.proof})
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

export default Spirits;
