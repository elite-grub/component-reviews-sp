const mongoose = require('mongoose');

const reviewsSchema = new mongoose.Schema({
  id: Number,
  user: {
    avatar: String,
    name: String,
    location: String,
    friends: String,
    otherReviews: String,
    photos: String,
    isElite: Boolean,
    elite: String,
  },
  stars: String,
  date: String,
  didCheckIn: Boolean,
  checkInStatus: String,
  review: String,
  hasPictures: Boolean,
  pictures: String,
  wasThisReview: Boolean,
  peerVoted: {
    avatar: String,
    name: String,
    thoughts: String,
  },
  thoughts: {
    useful: Number,
    funny: Number,
    cool: Number,
  },
  commentFromOwner: Boolean,
  ownerReview: {
    avatar: String,
    name: String,
    title: String,
    date: String,
    review: String,
  },
});

const Reviews = mongoose.model('reviews', reviewsSchema);

module.exports = {
  Reviews
}