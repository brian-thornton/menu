import { ExternalLink } from '#/ui/external-link';

export default function Page() {

  const beers = [
    {
      name: 'Boddingtons Pub Ale',
      brewery: 'Boddingtons',
      abv: '4.7%',
      description: 'Boddingtons Pub Ale is a higher ABV version of Boddingtons Bitter brewed for Export Markets. Boddingtons has been enjoyed by beer drinkers in England for more than 200 years, and is well known for its creamy head and smooth body. It is now available on draught in limited quantities.',
    },
    {
      name: 'Guinness Stout',
      brewery: 'Guinness',
      abv: '4.2%',
      description: 'Rich and creamy. Distinctively black. Velvety in its finish. This iconic beer is defined by harmony. Sip after sip, sweet counters bitter as the malt arrives on cue to compliment a base of roasted barley. Just as the unmistakable white head sits flush atop the dark beer, so do the flavors counter and combine perfectly. This is our greatest innovation. Truly unique. Perfectly balanced. Made of More™.',
    },
  ]

  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <h1 className="text-xl font-bold">English Ales & Irish Stouts</h1>
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
