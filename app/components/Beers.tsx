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

const Beers: FC<IBeers> = ({beers, type}) => {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <h1 className="text-xl font-bold">{type}</h1>
      <ul>
        {beers.map((beer) => {
          return (
            <li key={beer.name} style={{marginBottom: '30px'}}>
              <strong>{beer.name}</strong> (<a href={beer.url}>{beer.brewery}</a>) {beer.abv}
              <br />
              {beer.description}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Beers;
