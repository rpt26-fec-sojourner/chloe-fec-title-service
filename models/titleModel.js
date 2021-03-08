const mongoose = require('mongoose');


let titleSchema = mongoose.Schema({
  listingID: Number,
  listingName: String,
  listingLocation: String
});

let Title = mongoose.model('Title', titleSchema);

let createTitle = (newTitle) => {
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

      titleSchemaInstance.save()
        .catch((err) => {
          console.err(`Error while creating title: ${err}`);
        });
    } else {
      console.log('Title already exists with this listing name: ', newTitle.listingName);
    }
  })
    .catch((err) => {
      console.err(`Error querying the database (createTitle): ${err}`);
    });
};

let findAllTitles = () => {
  Title.find({}, (err, doc) => {
    if (err) {
      return console.error(err);
    } else {
      console.log('All titles: ', doc);
    }
  })
    .catch((err) => {
      console.err(`Error querying the database (findAllTitles): ${err}`);
    });
};

let deleteAllTitles = () => {
  Title.deleteMany({}, (err) => {
    if (err) {
      return err;
    } else {
      console.log('Deleted all documents from titles collection');
    }
  });
};

let findTitleInfo = (id) => {
  return Title.findOne({listingID: id}, (err, title) => {
    return title;
  });
};

module.exports.Title = Title;
module.exports.createTitle = createTitle;
module.exports.findAllTitles = findAllTitles;
module.exports.deleteAllTitles = deleteAllTitles;
module.exports.findTitleInfo = findTitleInfo;

