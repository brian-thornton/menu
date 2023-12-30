import { ExternalLink } from '#/ui/external-link';

export default function Page() {

  const beers = [
    {
      name: 'Miller Lite',
      brewery: 'Miller Brewing Company',
      abv: '4.2%',
      description: 'Our flagship brand, Miller Lite, is the great tasting, less filling beer that defined the American light beer category in 1975. We deliver a clear, simple message to consumers: \’Miller Lite is the better beer choice.\’ What\’s our proof? 1) Miller Lite is the original light beer. 2) Miller Lite has real beer taste because it\’s never watered down. 3) Miller Lite is the only beer to win four gold awards in the World Beer Cup for best American-style light lager. (2006)',
    },
    {
      name: 'Yuengling Lager',
      brewery: 'Yuengling Brewery',
      abv: '4.4%',
      description: 'Yuengling Traditional Lager is an iconic American lager famous for its rich amber color and medium bodied flavor. Brewed with roasted caramel malt for a subtle sweetness and a combination of cluster and cascade hops, this true original promises a well balanced taste with very distinct character. Its exceptional flavor and smooth finish is prevalently enjoyed by consumers with even the most discerning tastes. Our flagship brand, Yuengling Traditional Lager is an American favorite delivering consistent quality and refreshment that never disappoints. In fact, it\’s so widely known and unique in its class, in some areas you can ask for it simply by the name \’Lager.\’',
    },
    {
      name: 'New Trail State Lager',
      brewery: 'New Trail Brewing Company',
      abv: '4.2%',
      description: 'A crisp, clean, and refreshing lager brewed with American Pilsner malt, corn, and rice. Hopped with Saaz and Hallertau Mittelfruh.',
    },
  ]

  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <h1 className="text-xl font-bold">Lagers</h1>
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
