import { ExternalLink } from '#/ui/external-link';

export default function Page() {

  const beers = [
    {
      name: 'Strongbow Gold Apple',
      brewery: 'Strongbow',
      abv: '5.0%',
      description: 'Strongbow Gold Apple has a wonderful transparent gold color, a rich and complex aromatic array dominated by several varieties of apple and a refreshing texture with a true balance between first acidity, sharpness and sourness; and then sweetness and softness.',
    },
  ]

  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <h1 className="text-xl font-bold">Ciders</h1>
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
