const express = require('express');
const router = express.Router();
const model = require('../models/titleModel');

router.route('/title/:listing_id').get((req, res) => {
  let listingID = req.params.listing_id;
  model.findTitleInfo(listingID)
    .then((data) => {
      // console.log('data: ', data);
      res.send(data);
    });
});

module.exports = router;