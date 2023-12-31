import { ciders as beers } from '#/app/data/beer';

export default function Page() {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <h1 className="text-xl font-bold">Ciders & Seltzer</h1>
      <ul>
        {beers.map((beer) => {
          return (
            <li key={beer.name} style={{marginBottom: '10px'}}>
              <strong>{beer.name}</strong> ({beer.brewery}) {beer.abv}
              <br />
              {beer.description}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
