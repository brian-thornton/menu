import { ExternalLink } from '#/ui/external-link';

export default function Page() {

  const beers = [
    {
      name: 'Intracoastal IPA',
      brewery: 'Slacktide Brewing Company',
      abv: '6.5%',
      description: 'A classic American IPA brewed with a blend of American hops. This beer is golden in color with a medium body and a crisp finish. The hops add a citrusy flavor and aroma.',
    },
    {
      name: 'Dogfish Head 60 Minute IPA',
      brewery: 'Dogfish Head Craft Brewery',
      abv: '6.0%',
      description: 'Our flagship beer. A session India Pale Ale brewed with Warrior, Amarillo & ’Mystery Hop X.’ A powerful East Coast I.P.A. with a lot of citrusy hop character. THE session beer for beer geeks like us!',
    },
    {
      name: 'Frost',
      brewery: 'New Trail Brewing Company',
      abv: '6.0%',
      description: 'A hazy IPA brewed with oats and wheat. Hopped with Citra, Mosaic, and Simcoe.',
    },
    {
      name: 'Broken Heels',
      brewery: 'New Trail Brewing Company',
      abv: '7%',
      description: `A Hazy IPA hopped intrepidly with hand-selected Citra and Mosaic, leading to High Aromatics of luminous Citrus, rich Conifer, and refreshing Tropicals. This beer packs a full mouthfeel with low bitterness that is soft on the palette. Broken Heels is available all day everyday, and reminds us that no adventure is without its risks.
      Pack The Essentials.`,
    },
  ]

  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <h1 className="text-xl font-bold">IPAs</h1>
      <ul>
        {beers.map((beer) => {
          return (
            <li key={beer.name} style={{marginBottom: '30px'}}>
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
