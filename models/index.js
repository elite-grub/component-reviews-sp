const mongoose = require('mongoose');
const { Reviews } = require('./schema.js');
mongoose.connect('mongodb://localhost/reviews', { useNewUrlParser: true });
const db = mongoose.connection;

const allReviews = (id, callback) => {
  Reviews
    .find({id: 1})
    .exec((err, data) => {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, data);
    });
};

module.exports = {
  db,
  allReviews
}