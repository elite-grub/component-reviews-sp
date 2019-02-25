const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { allReviews } = require('../models/index.js');
const pathToAssets = path.join(__dirname, '../client/dist');
const staticAssets = express.static(pathToAssets);
const app = express();
const port = process.env.PORT || 3000;

app.use(staticAssets);
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('app.get working');
});

app.get('/api/reviews/:id', (req, res) => {
  let id = req.params.id;
  allReviews(id, (err, data) => {
    return err ?
    res.sendStatus(400) :
    res.send(data);
  });
});

app.listen(port, () => 
  console.log(`listening on port ${port}`)
);