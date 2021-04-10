// require('dotenv').config();
const mongoose = require('mongoose');

let titleSchema = mongoose.Schema({
  listingID: Number,
  listingName: String,
  listingLocation: String
});

let Title = mongoose.model('Title', titleSchema);

Title.createTitle = (newTitle) => {
  // Title.findOne({username: process.env.DB_USERNAME, password: process.env.DB_PASSWORD, listingName: newTitle.listingName}, (err, doc) => {
  Title.findOne({listingName: newTitle.listingName}, (err, doc) => {
    if (err) {
      return err;
    } else if (!doc) {
      let titleSchemaInstance = new Title(
        {
          titleId: newTitle.titleID,
          listingID: newTitle.listingID,
          listingName: newTitle.listingName,
          listingLocation: newTitle.listingLocation
        });

      titleSchemaInstance.save({username: process.env.DB_USERNAME, password: process.env.DB_PASSWORD})
        .catch((err) => {
          console.err(`Error while creating title: ${err}`);
        });
    } else {
      console.log('Title already exists with this listing name: ', newTitle.listingName);
    }
  })
    .catch((err) => {
      console.log(`Error querying the database (createTitle): ${err}`);
    });
};

let findAllTitles = () => {
  //Title.find({username: process.env.DB_USERNAME, password: process.env.DB_PASSWORD}, (err, doc) => {
  Title.find({}, (err, doc) => {
    if (err) {
      return console.error(err);
    } else {
      console.log('All titles: ', doc);
    }
  })
    .catch((err) => {
      console.log(`Error querying the database (findAllTitles): ${err}`);
    });
};

Title.deleteAllTitles = () => {
  //Title.deleteMany({username: process.env.DB_USERNAME, password: process.env.DB_PASSWORD}, (err) => {
  Title.deleteMany({}, (err) => {
    if (err) {
      return err;
    } else {
      console.log('Deleted all documents from titles collection');
    }
  });
};

Title.findTitleInfo = (id) => {
  //return Title.findOne({username: process.env.DB_USERNAME, password: process.env.DB_PASSWORD, listingID: id}, (err, title) => {
  return Title.findOne({listingID: id}, (err, title) => {
    return title || {};
  })
    .catch((err) => {
      console.log('findOne error: ', err);
    });
};

module.exports = Title;