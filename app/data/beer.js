const ipas = [
  {
    name: 'Intracoastal IPA',
    brewery: 'Slacktide Brewing Company',
    abv: '6.5%',
    url: 'https://www.slacktidebrewingco.com/',
    description: 'A classic American IPA brewed with a blend of American hops. This beer is golden in color with a medium body and a crisp finish. The hops add a citrusy flavor and aroma.',
  },
  {
    name: 'Freshies',
    brewery: 'Tone Wood Brewing Company',
    abv: '5.0%',
    url: 'https://www.tonewoodbrewing.com/',
    description: 'A classic American IPA brewed with a blend of American hops. This beer is golden in color with a medium body and a crisp finish. The hops add a citrusy flavor and aroma.',
  },
  {
    name: 'Dogfish Head 60 Minute IPA',
    brewery: 'Dogfish Head Craft Brewery',
    abv: '6.0%',
    url: 'https://www.dogfish.com/',
    description: 'Our flagship beer. A session India Pale Ale brewed with Warrior, Amarillo & ’Mystery Hop X.’ A powerful East Coast I.P.A. with a lot of citrusy hop character. THE session beer for beer geeks like us!',
  },

  {
    name: 'Winter Chill Factor',
    brewery: 'New Trail Brewing Company',
    abv: '7.0%',
    url: 'https://newtrailbrewing.com/',
    description: 'A Hazy IPA brewed with a blend of American hops. This beer is golden in color with a medium body and a crisp finish. The hops add a citrusy flavor and aroma.',
  },
  {
    name: 'Broken Heels',
    brewery: 'New Trail Brewing Company',
    abv: '7%',
    url: 'https://newtrailbrewing.com/',
    description: `A Hazy IPA hopped intrepidly with hand-selected Citra and Mosaic, leading to High Aromatics of luminous Citrus, rich Conifer, and refreshing Tropicals. This beer packs a full mouthfeel with low bitterness that is soft on the palette. Broken Heels is available all day everyday, and reminds us that no adventure is without its risks.
    Pack The Essentials.`,
  },
];

const lagers = [
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
];

const ales = [
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
];

const ciders = [
  {
    name: 'Strongbow Gold Apple',
    brewery: 'Strongbow',
    abv: '5.0%',
    description: 'Strongbow Gold Apple has a wonderful transparent gold color, a rich and complex aromatic array dominated by several varieties of apple and a refreshing texture with a true balance between first acidity, sharpness and sourness; and then sweetness and softness.',
  },
  {
    name: 'American Apple Imperial Cider',
    brewery: 'Blake\'s Hard Cider Company',
    abv: '8.0%',
    description: 'Blake\’s American Apple is a 100% all-natural hard cider. With a medium body, it is golden in color with a slightly fruity aroma. This cider finishes clean and dry with a hint of tartness to quench the thirst of any spirited adventurer.',
  },
  {
    name: '1911 Original Hard Cider',
    brewery: 'Beak & Skiff Apple Orchards',
    abv: '5.5%',
    description: '1911 Original Hard Cider is blended to perfection in Upstate New York. You\’ll enjoy the aroma of the orchard and a perfectly balanced, crisp finish.',
  },
  {
    name: 'Ranch Water',
    brewery: 'Ranch Rider Spirits Co.',
    abv: '5.0%',
    description: 'Ranch Water is a hard seltzer made with 100% organic agave, natural lime juice, and sparkling water. It\’s the perfect refreshing cocktail to enjoy anytime, anywhere.',
  },
];

module.exports = {
  ipas,
  lagers,
  ales,
  ciders,
}