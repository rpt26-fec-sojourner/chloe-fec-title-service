const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const model = require('./models/titleModel.js');
const mongoose = require('mongoose');
const distPath = path.join(__dirname, 'client/dist');

const app = express();

app.use(express.static(distPath));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/title', {useNewUrlParser: true, useUnifiedTopology: true});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/title/:listing_id', (req, res) => {
  let listingID = req.params.listing_id;
  model.findTitleInfo(listingID)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.get('/:listing_id', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.sendFile(path.join(distPath, 'index.html'));
});

module.exports = app;