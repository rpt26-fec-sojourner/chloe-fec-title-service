import express from 'express';
import bodyParser from 'body-parser';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import model from '../models/titleModel.js';
import mongoose from 'mongoose';

const app = express();
const port = 3000;
const _filename = fileURLToPath(import.meta.url);
const _currdir = path.dirname(_filename);
const _distdir = path.join(path.dirname(_currdir), 'client/dist');

console.log('meta: ', _distdir);

app.use(express.static(_distdir));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/title', {useNewUrlParser: true, useUnifiedTopology: true});

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