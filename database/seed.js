const dbHelper = require(__dirname + '/../database/config.js');
const faker = require('faker');

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

const generateTitleLocation = () => {
  let city = faker.address.city();
  let state = faker.address.state();
  let ctryIndex = Math.floor(Math.random() * spaceLocations.length);
  let country = spaceLocations[ctryIndex];

  return `${city}, ${state}, ${country}`;
};

const seedDatabase = () => {
  let id = 1;
  let name = '';
  let location = '';
  let usedNames = [];

  dbHelper.deleteAllTitles();

  while (id <= 100) {
    name = generateTitleName(usedNames);
    usedNames.push(name);
    location = generateTitleLocation();

    let newTitle = {
      listingID: id,
      listingName: name,
      listingLocation: location
    };

    dbHelper.createTitle(newTitle);
    id++;
  }
};

seedDatabase();

module.exports.generateAdj = generateAdj;
module.exports.generateNoun = generateNoun;
module.exports.generateTitleName = generateTitleName;
module.exports.generateTitleLocation = generateTitleLocation;
module.exports.seedDatabase = seedDatabase;