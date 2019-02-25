const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:3000/test');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
  'mongoose connected';
});