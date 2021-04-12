const dbHelper = require('../models/titleModel.js');
const faker = require('faker');
const mongoose = require('mongoose');
const dbUser = process.env.DB_USERNAME;
const dbPW = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST || '127.0.0.1';
const dbPort = process.env.DB_PORT || '27017';

let seeder = {};
seeder.spaceAdjectives = [
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

seeder.spaceNouns = [
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

seeder.spaceLocations = [
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

seeder.generateAdj = () => {
  var adjIndex = Math.floor(Math.random() * seeder.spaceAdjectives.length);

  return seeder.spaceAdjectives[adjIndex];
};

seeder.generateNoun = () => {
  var nounIndex = Math.floor(Math.random() * seeder.spaceNouns.length);

  return seeder.spaceNouns[nounIndex];
};

seeder.generateTitleName = (usedNames) => {
  let adj = seeder.generateAdj();
  let noun = seeder.generateNoun();
  let name = `The ${adj} ${noun}`;

  if (usedNames.includes(name)) {
    while (usedNames.includes(name)) {
      adj = seeder.generateAdj();
      noun = seeder.generateNoun();
      name = `The ${adj} ${noun}`;
    }
  }

  return name;
};

seeder.generateTitleLocation = () => {
  let city = faker.address.city();
  let state = faker.address.state();
  let ctryIndex = Math.floor(Math.random() * seeder.spaceLocations.length);
  let country = seeder.spaceLocations[ctryIndex];

  return `${city}, ${state}, ${country}`;
};

seeder.seedDatabase = () => {
  mongoose.connect('mongodb://localhost:27017/title', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
      return dbHelper.deleteAllTitles();
    })
    .then(() => {
      let id = 1;
      let name = '';
      let location = '';
      let usedNames = [];

      while (id <= 100) {
        name = seeder.generateTitleName(usedNames);
        usedNames.push(name);
        location = seeder.generateTitleLocation();

        let newTitle = {
          listingID: id,
          listingName: name,
          listingLocation: location
        };

        dbHelper.createTitle(newTitle);
        id++;
      }
    })
    .catch((err) => {
      console.log('createTitle error: ', err);
    });
};

seeder.seedDatabase();

module.exports.seeder = seeder;