//Could not figure out how to import modules with webpack/jest so I just copied the functions from seed.js.

let spaceAdjectives = [
  'Astronomical',
  'Celestial',
  'Cosmic',
  'Extraterrestrial',
  'Galactic',
  'Intergalactic',
  'Interstellar',
  'Lunar',
  'Martian',
  'Planetary',
  'Solar',
  'Stellar'
];

let spaceNouns = [
  'Rocket',
  'Rocketship',
  'Spaceship',
  'UFO',
  'Satellite',
  'Space Capsule',
  'Space Shuttle',
  'Spacecraft',
  'Flying Saucer'
];

let spaceLocations = [
  'Earth',
  'Mars',
  'Jupiter',
  'Neptune',
  'Mercury',
  'Saturn',
  'Uranus',
  'Venus',
  'Moon'
];


const generateAdj = () => {
  var adjIndex = Math.floor(Math.random() * spaceAdjectives.length);

  return spaceAdjectives[adjIndex];
};

const generateNoun = () => {
  var nounIndex = Math.floor(Math.random() * spaceNouns.length);

  return spaceNouns[nounIndex];
};

const generateTitleName = (usedNames) => {
  let adj = generateAdj();
  let noun = generateNoun();
  let name = `The ${adj} ${noun}`;

  if (usedNames.includes(name)) {
    while (usedNames.includes(name)) {
      adj = generateAdj();
      noun = generateNoun();
      name = `The ${adj} ${noun}`;
    }
  }

  return name;
};

test('generateAdj returns a word from the spaceAdjectives array', () => {
  let inArray = spaceAdjectives.includes(generateAdj());

  expect(inArray).toBe(true);

  inArray = spaceAdjectives.includes('chloe');
  expect(inArray).toBe(false);
});


test('generateNoun returns a word from the spaceNouns array', () => {
  let inArray = spaceNouns.includes(generateNoun());

  expect(inArray).toBe(true);

  inArray = spaceNouns.includes('chloe');
  expect(inArray).toBe(false);
});