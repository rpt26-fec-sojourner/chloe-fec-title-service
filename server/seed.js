const dbHelper = require(__dirname + '/../database/config.js');

/*

Title name:
  Adjective + Noun

  Adjectives:
    Astronomical
    Celestial
    Cosmic
    Extraterrestrial
    Galactic
    Intergalactic
    Interstellar
    Lunar
    Martian
    Planetary
    Solar
    Stellar

  Nouns:
    Rocket
    Rocketship
    Spaceship
    UFO
    Satellite
    Space Capsule
    Space Shuttle
    Spacecraft
    Flying Saucer

Locations:
  Original: City, State, Country
  FEC: Lorem Ipsum, Lorem Ipsum, Planets/Space Locations

  Planets/Space Locations:
    Earth
    Mars
    Jupiter
    Neptune
    Mercury
    Saturn
    Uranus
    Venus
    Moon
*/

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

const generateAdj = () => {
  var adjIndex = Math.floor(Math.random() * spaceAdjectives.length);

  return spaceAdjectives[adjIndex];
};

const generateNoun = () => {
  var nounIndex = Math.floor(Math.random() * spaceNouns.length);

  return spaceNouns[nounIndex];
};

const generateTitleName = () => {
  var adj = generateAdj();
  var noun = generateNoun();

  return `The ${adj} ${noun}`;
};

//Function to find latest title ID in mongodb - is there easy way to do this? google!

const seedDatabase = () => {
  //One Hundred Times loop (listingID 1 to 100):
  //Use generateTitleName to get a random name
  //Use generateLocation to get a random location
  //Put the random name and location into this object:
  var newTitle = {
    titleID: 0,
    listingID: 0,
    listingName: name,
    listingLocation: location
  };
};