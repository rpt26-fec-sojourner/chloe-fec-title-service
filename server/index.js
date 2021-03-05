const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const clientDist = path.join(__dirname, '/../client/dist');
const dbHelper = require(__dirname + '/../database/config.js');

const app = express();
const port = 3000;

app.use(express.static(`${clientDist}`));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/get', (req, res) => {
  console.log('hello');
  var newTitle =
    {
      titleID: 1,
      listingID: 10,
      listingName: 'Spaceship',
      listingLocation: 'Mars'
    };

  dbHelper.createTitle(newTitle);

  dbHelper.findAllTitles();
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});