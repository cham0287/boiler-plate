const express = require('express');
const app = express();
const port = 7070;
const mongoose = require('mongoose');

mongoose
  .connect(
    'mongodb+srv://admin:7216@boilerplate.nmhbm.mongodb.net/?retryWrites=true&w=majority'
  )
  .then(() => console.log('mongoDB connected'))
  .catch((err) => console.log(err));

app.get('/', (req, res) => {
  res.send('Hello World');
});
app.listen(port, () => console.log(`listening on ${port}`));
