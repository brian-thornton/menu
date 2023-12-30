import { ExternalLink } from '#/ui/external-link';

export default function Page() {

  const beers = [
    {
      name: 'Berkshire',
      brewery: 'Berkshire Mountain Distillers',
      proof: '86',
      description: '',
    },
    {
      name: 'Knob Creek 9',
      brewery: 'Beam Suntory',
      proof: '100',
      description: 'Knob Creek is a brand of Kentucky straight bourbon whiskey produced by Beam Suntory at the Jim Beam distillery in Clermont, Kentucky.',
    },
    {
      name: 'Eliah Craig',
      brewery: 'Heaven Hill',
      proof: '94',
      description: 'Elijah Craig is a premium brand of bourbon whiskey produced and bottled by the Heaven Hill company in Bardstown, Kentucky. The brand is sold as a straight bourbon, typically in 750 mL glass bottles.',
    },
    {
      name: 'Penelope Architect',
      brewery: 'Penelope Bourbon',
      proof: '94',
      description: 'Penelope Bourbon is a brand of bourbon whiskey produced in the United States by Penelope Bourbon LLC. The company was founded in 2018 by Mike Paladini, Danny Polise and Michael Maestri.',
    },
    {
      name: 'Penelope Toasted',
      brewery: 'Penelope Bourbon',
      proof: '94',
      description: 'Penelope Bourbon is a brand of bourbon whiskey produced in the United States by Penelope Bourbon LLC. The company was founded in 2018 by Mike Paladini, Danny Polise and Michael Maestri.',
    },
    {
      name: 'Jack Daniels',
      brewery: 'Jack Daniels',
      proof: '80',
      description: 'Jack Daniel\’s is a brand of Tennessee whiskey and the top-selling American whiskey in the world. It is produced in Lynchburg, Tennessee, by the Jack Daniel Distillery.',
    },
    {
      name: 'Russels Reserve',
      brewery: 'Wild Turkey',
      proof: '90',
      description: 'Russell\’s Reserve is a brand of small batch bourbon whiskey distilled and marketed by the Wild Turkey Distillery, which is owned by the Campari Group. It is named for master distillers Jimmy and Eddie Russell.',
    },
    {
      name: 'Heaven Hill Bottled in Bond',
      brewery: 'Heaven Hill',
      proof: '100',
      description: 'Heaven Hill Distillery is an American, private, family-owned and operated distillery founded in 1935 and headquartered in Bardstown, Kentucky, that produces and markets the Heaven Hill brand of Kentucky Straight Bourbon Whiskey and a variety of other distilled spirits.',
    },
    {
      name: 'Makers Mark',
      brewery: 'Makers Mark',
      proof: '90',
      description: 'Maker\’s Mark is a small-batch bourbon whiskey produced in Loretto, Kentucky, by Beam Suntory. It is bottled at 90 U.S. proof and sold in distinctively squarish bottles sealed with red wax.',
    },
    {
      name: 'Bakers',
      brewery: 'Beam Suntory',
      proof: '107',
      description: 'Baker\’s Bourbon is a brand of bourbon whiskey currently owned by Beam Suntory. It is produced under the Beam Inc. umbrella at the Jim Beam distillery in Clermont, Kentucky.',
    },
    {
      name: 'Wild Turkey Rare Breed',
      brewery: 'Wild Turkey',
      proof: '116.8',
      description: 'Wild Turkey Rare Breed is a barrel proof bourbon, meaning it is bottled directly from a variety of barrels at the proof it reaches in those barrels, with no added water to lower the proof or dilute the flavor.',
    },
  ]

  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <h1 className="text-xl font-bold">Burbons</h1>
      <ul>
        {beers.map((beer) => {
          return (
            <li key={beer.name} style={{marginBottom: '30px'}}>
              <strong>{beer.name}</strong> ({beer.brewery}) {beer.proof}
              <br />
              {beer.description}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
