const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const clientDist = path.join(__dirname, '/../client/dist');
const dbHelper = require(__dirname + '/../database/config.js');
const seeder = require(__dirname + '/../server/seed.js');

const app = express();
const port = 3000;

app.use(express.static(`${clientDist}`));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/get', (req, res) => {
  dbHelper.deleteAllTitles();
  seeder.seedDatabase();

  dbHelper.findAllTitles();
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});