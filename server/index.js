const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const model = require('../models/titleModel.js');
const mongoose = require('mongoose');

const app = express();
const port = 3000;
const _distdir = path.join(__dirname, 'client/dist');

app.use(express.static(_distdir));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/title', {useNewUrlParser: true, useUnifiedTopology: true});

app.get('/title/:listing_id', (req, res) => {
  let listingID = req.params.listing_id;
  model.findTitleInfo(listingID)
    .then((data) => {
      // const html =
      //   `<html>
      //     <body>
      //       <div class="name">${data.listingName}</div>
      //       <div class="location">${data.listingLocation}</div>
      //     </body>
      //   </html>`;
      // res.send(html);
      res.status(200).send(data);
    });
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});

module.exports = app;