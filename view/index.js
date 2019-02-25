const express = require('express');
const app = express();
const port = process.env.port || 3000;

app.get('/', (req, res) => {
  res.send('app.get working');
});

app.listen(port, () => 
  console.log('listening on port ${port}')
);