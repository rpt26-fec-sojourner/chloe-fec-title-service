const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const clientDist = path.join(__dirname, '/../client/dist');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.static(`${clientDist}`));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/title', {useNewUrlParser: true, useUnifiedTopology: true});

app.use('/', require('../routes/listingRoute'));

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});