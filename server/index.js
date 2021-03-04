const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const clientDist = path.join(__dirname, '/../client/dist');
const app = express();
const port = 3000;

app.use(express.static(`${clientDist}`));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});