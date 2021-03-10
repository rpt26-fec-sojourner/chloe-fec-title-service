const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const model = require('../models/titleModel');
const clientDist = path.join(__dirname, '/../client/dist');
const mongoose = require('mongoose');
const cors = require('cors');
const ReactDOMServer = require('react-dom/server');

const app = express();
const port = 3000;

// app.use(cors());
app.use(express.static(`${clientDist}`));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/title', {useNewUrlParser: true, useUnifiedTopology: true});

// app.use('/', require('../routes/listingRoute'));
app.get('/title/:listing_id', (req, res) => {
  let listingID = req.params.listing_id;
  model.findTitleInfo(listingID)
    .then((data) => {
      const html =
        `<html>
          <body>
            <div class="name">${data.listingName}</div>
            <div class="location">${data.listingLocation}</div>
          </body>
        </html>`;
      res.send(html);
    });
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});